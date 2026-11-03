# Magpie's Instrument Archive - how to edit it

Open `index.html` in a browser to view the site. No internet is needed.
Keep all the files in the same folder.

## Files
- `index.html` - home page (title, map, countries sorted by number of instruments, contact)
- `catalogue.html` - full list of instruments
- `country.html` - country pages (built automatically, one template for every country)
- `instrument.html` - instrument pages (built automatically, one template for every instrument)
- `instruments.js` - ALL your instrument info lives here
- `style.css` - colours, fonts and layout
- `images/` - your photos go here

## Edit descriptions and other text
Open `instruments.js` in any text editor (Notepad is fine). Find the instrument and type between the quotes:

    description:"A short description that also shows on the country page.",
    tuning:"", construction:"", maker:"", acquired:"", recordings:"", notes:""

Each field matches a titled box on that instrument's page. Leave it as `""` and the box stays empty.
Don't use a straight double quote `"` inside your text (it breaks the line). Use ' or “ ” instead.

## Add your photos
Save the photo in the `images` folder named exactly after the instrument's id, as a .jpg:
`images/MA-001.jpg`. It then appears on the country page and the instrument page automatically.
No photo = the empty placeholder box stays.

## Add an instrument
Copy a whole block in `instruments.js` and paste it just before the closing `];`. Change:
- `id` - must be unique, e.g. `"MA-065"` (this is also the photo filename)
- `name`
- `countries` - two-letter codes, e.g. `["TR","GR"]`. The instrument appears on each of those country pages.
- `region` - the text shown under "Where It's From"
Don't forget the comma at the end of the block.

## Add a country (new red country on the map)
1. Use its code in an instrument's `countries` list.
2. Add the code and name to `countryNames` at the bottom of `instruments.js`, e.g. `NZ:"New Zealand"`.
That's it - the map colours and links it automatically. (Tiny countries get a small red dot.)
Note: the map contains only large/medium shapes; very small nations (islands) may not have a shape to click, and
would need a dot added by hand in `index.html` (copy an existing `<circle ... class="dot">` line, set its id to
`CODE-dot` and change cx/cy).

## The map
The map is a fixed picture (SVG) stored inside `index.html`, no zooming or dragging. Every country is a shape with
its two-letter code as its id. Colours are in `style.css` under `#world-map`.

## Contact details
Edit them in `index.html`, in the section `<h2 id="contact">`. The copyright text is in the `<footer>` at the bottom
of every page (change it in all four .html files).

## Putting it online
Upload the whole folder to a host such as GitHub Pages or Netlify.
