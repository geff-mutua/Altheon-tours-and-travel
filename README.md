# Altheon — Tours & Travel

A React + Vite site for a Kenya-focused safari & travel brand, structured
after the information architecture of endlesssafaris.com (hero → philosophy
→ journeys-in-motion → destinations → why-us → testimonials → journal → FAQ
→ contact → footer) with its own visual identity: an espresso-brown/
caramel/parchment palette sourced from the client's own logo, and a
Fraunces/Inter/Space Mono type system.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

Build for production with `npm run build` — output goes to `dist/`.

## Structure

```
src/
  components/       one component + CSS file per section (home page sections)
  pages/            Home, JournalIndex (blog listing), JournalPost (blog article)
  data.js           destinations, departures, testimonials, journal/blog posts, FAQ content
  nav-data.js        content for the header's Destinations / Journeys / Discover mega-menus
  App.jsx           router + layout (Navbar / Routes / Footer) + hash-scroll handling
  index.css         design tokens (colors, type, spacing) + shared classes
```

Routing is handled by `react-router-dom`. The home page (`/`) is still a
single scrolling page; `/journal` is a full blog index with search, tag
filtering, and Newest/Quick Reads/Long Reads sorting, and `/journal/:slug`
renders an individual article with a hero image, pull quote, body copy, and
related posts. Nav/footer links to in-page sections use `/#section-id` so
they work correctly from any route.

The header nav is a mega-menu modeled on endlesssafaris.com's structure — a
parchment/white utility bar (phone/email/social) above a main row with
**Destinations** and **Journeys** mega-dropdowns (grouped columns + a
featured card) and a simpler two-column **Discover** dropdown, all
populated from `nav-data.js`. The nav uses a light background throughout
(not just on scroll) so the logo — dark ink on transparent — stays legible;
see the `--ink-on-light-dim` / `--accent-on-light` tokens in `index.css`
for the text/hover colors used only in that inverted context. On narrow
screens it collapses into an accordion inside the mobile menu. The
"Plan My Journey" button (nav CTA, hero, and the CTA at the bottom of every
blog post) links to `/plan-your-journey`, a dedicated enquiry page modeled
on endlesssafaris.com/contact (hero banner, contact info + socials, and an
expanded form with travel dates) — a lighter contact prompt still lives
in-page on the home route at `/#contact`.

**Destinations** (`data.js`) covers six Kenya regions — Maasai Mara,
Amboseli, Samburu, Lake Nakuru, Tsavo, and Diani Beach — rather than
countries; the Destinations mega-menu in `nav-data.js` mirrors the same six.
Note the **Journeys** mega-menu's route links (Cusco, Kyoto, Reykjavik, …)
and the unused `departures` export in `data.js` predate that change and
haven't been revisited — worth a pass if the brand is Kenya-only going
forward.

A `WhatsAppWidget` (fixed bottom-right, all routes) opens a pre-filled
`wa.me` chat — edit the number/message at the top of
`src/components/WhatsAppWidget.jsx`.

## Notes

- **Images**: destination, hero, and blog photography mostly load from
  `images.unsplash.com` (free to hotlink, no attribution required). A few
  images — where a specific, correct landmark or wildlife moment mattered
  more than convenience — are sourced from Wikimedia Commons instead, and
  those **do** require attribution before shipping to production:
  - Bhutan destination card (Taktsang Monastery) — Bernard Gagnon, CC BY-SA 4.0,
    https://commons.wikimedia.org/wiki/File:Taktsang_Monastery,_Bhutan_01.jpg
  - "Atlas at first light" inline photo (Kasbah Ait Ben Haddou) — Honza Soukup, CC BY 2.0,
    https://commons.wikimedia.org/wiki/File:Kasbah_Ait_Ben_Haddou_(37718032425).jpg
  - "Wildebeest crossing, explained" cover — Danijel Mihajlovic, CC BY-SA 4.0,
    https://commons.wikimedia.org/wiki/File:Wildebeest_Jumping_Into_the_Mara_River.jpg
  - "Wildebeest crossing, explained" inline — Charles J. Sharp, CC BY-SA 4.0,
    https://commons.wikimedia.org/wiki/File:Western_white-bearded_wildebeest_(Connochaetes_taurinus_mearnsi)_Mara_River_crossing_2b.jpg
  - "Chasing the aurora, realistically" cover — Giles Laurent, CC BY-SA 4.0,
    https://commons.wikimedia.org/wiki/File:039_Northern_lights_over_M%C3%BDvatn_(Iceland)_Photo_by_Giles_Laurent.jpg
  - All other photography is placeholder-quality stock; swap for licensed/
    original photography before shipping to production.
- **Video**: the Hero background loop and the "Journeys, as they actually
  move" carousel (`JourneysInMotion.jsx`) use footage from
  `assets.mixkit.co` — Mixkit's free license permits commercial use with no
  attribution required. Videos are muted, looped, and respect
  `prefers-reduced-motion` (falls back to a static poster image); each card
  additionally lazy-loads and pauses when off-screen via
  `IntersectionObserver` to limit bandwidth. The carousel holds 5 clips,
  paging 3 at a time (arrows shift the window by one; dots jump straight to
  a clip) — add more entries to the `REELS` array to extend it. Swap the
  URLs in `Hero.jsx` / `JourneysInMotion.jsx` for licensed footage before
  shipping to production.
- **Logo**: `public/logo.jpeg` is the client-supplied source file (white
  background, no alpha). `logo.png` is a background-removed full lockup
  (icon + wordmark + tagline) — currently unused but kept for reference;
  `logo-mark.png` is a tight-cropped icon-only PNG, the one actually used
  in the navbar (`.nav__brand`, no adjacent text — the icon is the whole
  mark) and in the footer, where it sits on a small parchment-colored chip
  (`.footer__logo`) since the icon's own ink is too dark to read directly
  against the footer's dark background. `favicon-32/64/180.png` are resized
  versions of the same crop for the browser tab and touch icon. Regenerate
  any of these from a higher-res source logo with the same white-threshold
  approach if the logo is ever updated (see git history for the PIL script
  used).
- **Colors**: the palette in `src/index.css` (`--ink`, `--panel`,
  `--brass`/`--brass-bright`, etc.) was derived by sampling the logo's two
  ink colors (espresso brown ~`#432313`, caramel ~`#a56c3e`) and adjusting
  lightness to hit accessible contrast against light text — see the
  comment at the top of `index.css`. Because every component reads these
  as CSS custom properties, re-theming from a different logo is still just
  a matter of editing that one `:root` block.
- Fonts: Fraunces (display headings) and Space Mono (labels/eyebrows/nav)
  are unchanged from the original scaffold; the body font is now **Inter**
  (matching qxp.global) in place of Work Sans. All three load from Google
  Fonts in `index.html`; self-host them if you need to work offline or
  improve performance.
- The contact form in `Contact.jsx` currently just shows a success state on
  submit — wire it up to your email/CRM endpoint of choice.
- The newsletter form in `Footer.jsx` and the blog search in `JournalIndex.jsx`
  are client-side only — wire the newsletter form up to your ESP, and the
  search already filters the local `journal` data in `data.js`.
- Colors, spacing, and type scale all live as CSS custom properties at the
  top of `src/index.css`, so re-theming is a matter of editing one file.
- Blog posts are authored directly in the `journal` array in `src/data.js`
  (slug, tag, author, images, body paragraphs, related post slugs) — add a
  new object to publish a new article at `/journal/<slug>`.
