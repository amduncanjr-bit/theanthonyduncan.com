#!/usr/bin/env python3
"""Add an article to the live site's ARTICLES object and reading order.

Usage:
  python3 tools/add_article.py article.json

article.json:
{
  "slug": "my-new-article",         // lowercase, hyphens only
  "b": "yp",                        // tc|yp|sl|tr|rw|bc|note
  "t": "Title",
  "d": "One-sentence dek.",
  "date": "Sep 2026",
  "read": "4 min read",
  "body": "<p>…</p><h2>…</h2><blockquote>…</blockquote><p>…</p>"
}

Also appends the article to the Topics feed (POSTS) unless b == "note".
Then: git add index.html && git commit && git push  → Pages redeploys.
"""
import json, re, sys

if len(sys.argv) != 2:
    sys.exit(__doc__)
a = json.load(open(sys.argv[1]))

for k in ("slug", "b", "t", "d", "date", "read", "body"):
    if not a.get(k):
        sys.exit(f"missing field: {k}")
if not re.fullmatch(r"[a-z0-9-]+", a["slug"]):
    sys.exit("slug must be lowercase letters, digits, hyphens")
if a["b"] not in ("tc", "yp", "sl", "tr", "rw", "bc", "note"):
    sys.exit("b must be one of tc|yp|sl|tr|rw|bc|note")

html = open("index.html").read()
if f"'{a['slug']}'" in html:
    sys.exit(f"slug already exists: {a['slug']}")

def js(s):
    return s.replace("\\", "\\\\").replace("`", "'").replace("${", "$ {")

entry = (f"  '{a['slug']}': {{b:'{a['b']}', t:`{js(a['t'])}`, d:`{js(a['d'])}`, "
         f"date:'{a['date']}', read:'{a['read']}',\n    body:`{js(a['body'])}`}}")

# 1. append entry to ARTICLES
anchor = "\n};\nconst ART_ORDER = "
i = html.index(anchor)
html = html[:i] + ",\n" + entry + html[i:]

# 2. append slug to ART_ORDER
m = re.search(r"const ART_ORDER = \[([^\]]*)\];", html)
order = m.group(1).rstrip()
html = html[:m.start(1)] + order + f", '{a['slug']}'" + html[m.end(1):]

# 3. add to Topics feed unless it's a founder note
if a["b"] != "note":
    dek = js(a["d"]).replace("'", "\\'")
    t = js(a["t"]).replace("'", "\\'")
    post = f"  {{slug:'{a['slug']}', b:'{a['b']}',t:'{t}',d:'{dek}'}},\n"
    fa = "const POSTS = [\n"
    j = html.index(fa) + len(fa)
    html = html[:j] + post + html[j:]

open("index.html", "w").write(html)
print(f"added '{a['slug']}' — now: git add index.html && git commit -m 'article: {a['slug']}' && git push")
