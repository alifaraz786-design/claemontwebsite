# Claemont Ridge Law — website

Static marketing site for a new law firm. Four public pages, no backend, deployed to
Vercel. Built from a Claude Design canvas; the source artboards are in
`Style tile review/` and remain the visual source of truth.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:4321 |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run check` | `astro check` — types + template diagnostics. Run before committing. |

## Stack

- **Astro 7**, default `static` output. No SSR, no adapter, no server code.
- **Tailwind CSS v4**, wired through `@tailwindcss/vite` in `astro.config.mjs`.
- **Zero JavaScript ships** except one inline script for the mobile menu.
  Keep it that way — if a feature needs a framework component, question the feature.

### There is no `tailwind.config.js` — and there should not be

Tailwind v4 is configured in CSS. All tokens live in the `@theme` block at the
top of `src/styles/global.css`. `@astrojs/tailwind` is **not** used: it peers on
`astro@^3||^4||^5` and `tailwindcss@^3`, so it supports neither Astro 7 nor
Tailwind 4. Do not add it.

## Layout of the repo

```
src/
  assets/       Images processed by astro:assets (imported, never in public/)
  components/
    ui/         Primitives: Button, Eyebrow, Rule, Field, SectionIntro, …
    sections/   Page sections, one folder per page + shared CtaBand/PageHeader
                and Confirmation
    Header.astro Footer.astro
  data/         All client-editable copy. Edit content HERE, not in templates.
  layouts/      Layout.astro — the only place <head> is defined
  pages/        One file per route
  styles/       global.css — the entire design system
public/         Served verbatim: favicon, robots.txt
Style tile review/  Original design artboards. Reference only; not built.
```

## Rules

### Content lives in `src/data/`, never in templates

Phone numbers, addresses, practice areas, roles, credentials and the founder's
bio all come from `src/data/*.ts`. A client asking to change a phone number
should be a one-line edit in `site.ts`, not a search across every page.
Placeholders are written `[LIKE THIS]` so remaining ones are greppable:

```bash
grep -rn '\[[A-Z]' src/data/
```

### Never hardcode a pixel value

Use the tokens in `@theme`, Tailwind's spacing scale (`p-6`, `gap-10` — v4
generates any multiple of `0.25rem`, so `px-30` = 120px works), or a custom
`@utility`. Arbitrary values (`w-[437px]`, `text-[13px]`) are not acceptable —
if a value recurs it belongs in `global.css`; if it does not recur, question it.

The type scale is named by role, not size: `text-hero`, `text-h1`, `text-h2`,
`text-h3`, `text-body-lg`, `text-body`, `text-small`, `text-micro`,
`text-eyebrow`. Line-heights are paired to each step automatically.

### Colour has a hard rule: gold is a metal, not a fill

- `gold` (`#C6A15B`) is legible **on ink only**. `gold-deep` (`#7A5E28`) is its
  counterpart **on bone only**. Using either on the wrong ground fails contrast.
- Body copy is **never** gold. Gold is for hairlines, eyebrows, numerals,
  borders, icon strokes, and single-word emphasis in a display heading.
- Any section on the bone background needs `on-bone` on its root element so the
  focus ring switches to `gold-deep`.

### Mobile and desktop are built together, never sequentially

Base classes are mobile (390px). `lg:` is the desktop switch — the design jumps
390 → 1440 with nothing in between, so `sm:` and `md:` are used only where a
layout genuinely needs an intermediate step. Both breakpoints of every component
were in the original artboards; if you are changing one, change the other in the
same edit.

Use `gutter-x` for side padding and `section-y` for vertical rhythm rather than
respelling `px-6 lg:px-30` each time.

### Semantic HTML

`<header> <main> <section> <footer> <address> <blockquote> <ol>/<ul> <dl>`.
One `<h1>` per page. Decorative marks (arrows, diamonds, rules, the map) carry
`aria-hidden="true"`. Every icon-only control needs an `aria-label`.

## Forms — there is no backend

Both forms live on `/contact` and post directly to Web3Forms. The **client
inquiry** redirects to `/thank-you`; the **career inquiry** redirects to
`/career-received`, so an applicant never lands on the client confirmation.

Web3Forms carries no attachments on the free plan, so the career form asks for
a link to a CV rather than an upload. Adding a real file upload means adding a
backend — question the feature first.

The key is public-by-design and read from env with a placeholder fallback:

```
PUBLIC_WEB3FORMS_KEY=...
```

Set it in `.env` locally and in Vercel's environment variables. Without it the
forms render but submissions go nowhere.

Validation is browser-native and styled with `:user-invalid`, so error messages
appear only after a visitor has actually interacted with a field. There is no
validation JavaScript and none should be added.

## Things that are deliberate

- **The Firm is the homepage** (`/`).
- **There is no careers route.** The client removed it; careers is now a bone
  panel at the foot of `/contact` with its own form. Do not reinstate the page.
- **Service groups are named twice.** `cardAudience`/`cardTitle` are the short
  sector names on the homepage cards; `audience`/`title` are the fuller names on
  `/services`. The client supplied both sets — do not collapse them into one.
- **`/legal` is deliberately understated.** One notice, supplied verbatim by the
  client, set at the micro step with no page header and linked only from the
  footer. Do not promote it or rewrite the wording.
- **The founder portrait is a placeholder.** `PortraitPlaceholder.astro` renders
  hatching until a real image is passed as `src` — drop the headshot in
  `src/assets`, import it, pass it, and the placeholder disappears.
- **There is no map and no address.** The firm practises remotely: no office, no
  telephone, no directions. The drawn map panel was removed at the client's
  request and nothing asserts a location, including the JSON-LD.
- **`LegalService` JSON-LD is in `Layout.astro`** and reads from `site.ts`. It
  feeds the Google Business panel, which matters more than usual for a firm with
  no domain authority yet. It becomes correct as soon as the placeholders are.

## Before launch

- [ ] Set `PUBLIC_WEB3FORMS_KEY` in Vercel
- [ ] Set the real domain in `astro.config.mjs` (`site`) and `public/robots.txt`
- [ ] Add the founder's headshot and a real office photograph
- [ ] Move off the Gmail address once a firm-domain mailbox exists (`site.ts`)
- [ ] Confirm attorney-advertising disclaimers for the firm's actual jurisdiction
