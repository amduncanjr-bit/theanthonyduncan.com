/*
 * "Off the clock" — the photo rail on the homepage (#life).
 *
 * TO SWAP PHOTOS: put the image files in this folder (assets/life/), then edit
 * the list below. The list order is the order on the page. Nothing in
 * index.html needs to change, and the daily article engine never touches
 * this folder.
 *
 *   file      image file name in this folder
 *   alt       who / what is in the photo, in plain words (screen readers, search)
 *   title     the short line under the photo
 *   caption   the line after it
 *   position  optional crop focus, CSS object-position. Default '50% 50%'.
 *             Use '50% 25%' to keep faces near the top of a tall photo.
 *
 * WHAT WORKS: portrait photos, 3:4. The rail crops every photo to 3:4, and on
 * desktop every second photo to 4:5, so keep faces away from the edges.
 * Landscape photos work but lose their sides. Export about 900 x 1200 px (at
 * least 720 x 960), as .jpg or .webp under ~250 KB each. Not .heic — browsers
 * can't show it; export from Photos as JPEG. Stick to 8–12 photos.
 */
window.LIFE_PHOTOS = [
  { file: 'lego-both-kids.webp',     alt: 'Building LEGO with both kids',             title: 'Head of product', caption: 'Both of them. Neither takes notes.' },
  { file: 'lego-city.webp',          alt: 'Building a LEGO city with his daughter',   title: 'R&D',             caption: 'No plan, no permission, just bricks.' },
  { file: 'afrotech.webp',           alt: 'At AfroTech Conference',                   title: 'AfroTech',        caption: 'Where the rooms and the people finally match.' },
  { file: 'daughter-shoulders.webp', alt: 'His daughter on his shoulders',            title: 'Best seat',       caption: 'She sees further than I do already.' },
  { file: 'apple-park.webp',         alt: 'At Apple Park with a friend',              title: 'Apple Park',      caption: 'Long way from a laptop on the kitchen table.' },
  { file: 'knicks.webp',             alt: 'With his son in a Knicks jersey',          title: 'Knicks in five',  caption: "He doesn't know what he's agreed to yet." },
  { file: 'culturehouse.webp',       alt: 'At CultureHouse',                          title: 'CultureHouse',    caption: 'The best partnerships start in a hallway.' },
  { file: 'tree-lighting.webp',      alt: 'At a tree lighting with his kids',         title: 'December',        caption: 'The only deadline that matters that week.' },
  { file: 'opening-day.webp',        alt: 'At a baseball game',                       title: 'Opening day',     caption: "Some traditions don't need an app." },
  { file: 'office.webp',             alt: 'With a colleague in an office',            title: 'The work',        caption: 'Seven products, and none of it happens alone.' },
  { file: 'portrait-bw.webp',        alt: 'Portrait',                                 title: 'Still here',      caption: 'Still building.' },
];
