# A.G.I.E — Association of Ghanaians in Estonia website

The public website for the Association of Ghanaians in Estonia. Built with
[Next.js 15](https://nextjs.org) (App Router), React 19, TypeScript and
[Tailwind CSS v4](https://tailwindcss.com). Icons come from
[lucide-react](https://lucide.dev).

> **Open work and known issues are tracked in [`TODO.md`](TODO.md).** Read it
> before you start — several buttons and forms are deliberately stop-gaps.

---

## Getting started

Requirements: **Node.js 20 or newer** and npm.

```bash
npm install        # install dependencies
npm run dev        # start the dev server at http://localhost:3000
```

Other commands:

| Command             | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `npm run build`     | Production build (also catches build errors)   |
| `npm run start`     | Serve the production build locally             |
| `npm run lint`      | ESLint                                         |
| `npm run typecheck` | TypeScript type check                          |
| `npm audit`         | Check dependencies for known vulnerabilities   |

**Before pushing a change**, run `npm run lint`, `npm run typecheck` and
`npm run build` — all three should pass with no errors.

---

## Project structure

```
app/
  layout.tsx          Site-wide layout: font, navbar, footer
  page.tsx            Home page — lists the sections in order
  about/page.tsx      /about
  contact/page.tsx    /contact
  gallery/page.tsx    /gallery
  globals.css         Tailwind import + theme variables
  opengraph-image.tsx Social share image (generated at build time)
  sitemap.ts          /sitemap.xml
  robots.ts           /robots.txt
  manifest.ts         /manifest.webmanifest
  icon.png            Browser-tab icon (generated from the logo)
  apple-icon.png      iOS home-screen icon (logo on white)
components/
  Home/Hero.tsx       Home hero (video background)
  AboutSection.tsx    Home: "About the Association"
  Events.tsx          Home: "Upcoming Events"
  TestimonialSection.tsx  Home: "What Our Members Say"
  JoinSection.tsx     Home: "Join the Ghanaian Community"
  ContactSection.tsx  Home: "Get in Touch"
  JoinCTA.tsx         Home: "Ready to Join the Family?" banner
  FAQSection.tsx      Home: FAQ accordion
  NewsLetter.tsx      Home: "Stay Updated" newsletter form
  Footer.tsx          Site footer
  BackToTop.tsx       Floating "back to top" button (all pages)
  GalleryGrid.tsx     Gallery photo grid + full-screen lightbox
  navbar/             Navbar (Nav.tsx), mobile menu (MobileNav.tsx), wrapper
  ContactForm.tsx     Contact form used on /contact
constants.ts          Navigation links, contact details, social links
lib/mailto.ts         Temporary form "backend": opens the visitor's email app
lib/site.ts           Site URL + SEO settings, `pageMetadata()` helper
lib/utils.ts          `cn()` helper for merging Tailwind classes (shadcn/ui)
public/assets/        Images
public/videos/        Hero background video
TODO.md               Open tasks and known issues
```

Home page sections and their anchors (useful for links like `/#join`):
`#about`, `#events`, `#testimonials`, `#join`, `#contact`, `#faq`, `#newsletter`.

---

## Common content edits

Most content is plain data at the top of each component file — no CMS.

| To change…                         | Edit                                                                  |
| ---------------------------------- | --------------------------------------------------------------------- |
| Navbar / footer "Explore" links    | `navigation` in `constants.ts`                                        |
| Email, phone, location             | `contactInfo` in `constants.ts` (used by home, /contact and footer)   |
| Facebook / Instagram / LinkedIn    | `socialLinks` in `constants.ts`                                       |
| Events                             | `events` array in `components/Events.tsx`                             |
| Testimonials                       | `testimonials` array in `components/TestimonialSection.tsx`           |
| FAQs                               | `faqs` array in `components/FAQSection.tsx`                           |
| Gallery photos                     | `images` array in `app/gallery/page.tsx` (first photo is shown large) |
| Executive team                     | `team` array in `app/about/page.tsx`                                  |
| About stats (50+ members, etc.)    | `stats` array in `components/AboutSection.tsx`                        |

Notes:

- **Event dates** use ISO format: `"2026-03-06"` (YYYY-MM-DD). They are
  formatted automatically for display.
- **Images**: put the file in `public/assets/`, then import it at the top of the
  component (`import photo from "@/public/assets/photo.jpg"`) and pass it to
  `<Image src={photo} … />`. Importing (rather than using a string path) lets
  Next.js resize and optimise it automatically. Always write a meaningful `alt`.

### Replacing the hero video

`public/videos/herovideo2.mp4` is downloaded by every visitor, so keep it small
(aim for **under ~10 MB**). The current file is 1080p, ~2.5 Mbps, no audio,
7.5 MB. Compress a new video with [ffmpeg](https://ffmpeg.org) like this:

```bash
ffmpeg -i input.mp4 -vf "scale=1920:-2" -c:v libx264 -preset slow -crf 26 \
  -profile:v high -pix_fmt yuv420p -an -movflags +faststart \
  public/videos/herovideo2.mp4
```

Raise `-crf` (e.g. 28) for a smaller file, lower it for higher quality. `-an`
strips audio (the video is muted anyway); `+faststart` lets it start playing
before it has fully downloaded. `public/assets/herobg1.jpg` is shown while the
video loads — update it too if the new video looks very different.

---

## Design conventions

Keep new work consistent with the existing sections:

- **Colours**: primary `green-700` (hover `green-800`), accent `yellow-300`,
  text `gray-800` / `gray-600`, light sections `bg-white` / `bg-gray-50`, dark
  sections `bg-gray-900` / `bg-gray-800`. Red/yellow/green together = Ghana flag.
- **Keep it simple and flat**: prefer solid colours. Don't add new gradients or
  heavy decorative effects.
- **Section layout**: `py-16 md:py-20 px-6 md:px-12 lg:px-24`, content inside
  `max-w-7xl mx-auto` (or narrower). Headings follow the pattern
  `What Our <span className="text-green-700">Members Say</span>`, often with a
  small uppercase green label above.
- **Alternate backgrounds** so neighbouring sections are visually distinct.
- **Responsive, mobile-first**: design for phones first, then add `sm:` / `md:`
  / `lg:` changes. Check every change at ~375px (phone), ~768px (tablet) and
  ~1280px (desktop) in the browser dev tools. Watch for long unbreakable text
  (emails, URLs) overflowing narrow cards.
- **Accessibility**: use real `<button>`/`<Link>` elements (never a button
  inside a link), give icon-only buttons an `aria-label`, connect form `<label>`s
  to inputs with `htmlFor`/`id`, and keep visible focus styles.

---

## Dependencies and security notes

- **`postcss` override in `package.json`**: Next.js 15 bundles an old PostCSS
  (8.4.31) with known vulnerabilities. The `overrides` entry forces the patched
  8.5.x line. Leave it in place; it can be removed after upgrading to a Next.js
  version that ships a fixed PostCSS (Next 16+) — check with `npm audit`.
- Run `npm audit` occasionally. Prefer `npm audit fix` over
  `npm audit fix --force`; the latter can install breaking major upgrades.
- The project is set up for [shadcn/ui](https://ui.shadcn.com) (config in
  `components.json`, helper in `lib/utils.ts`), but no shadcn components are
  currently installed. Add one with `npx shadcn@latest add <component>`.

---

## SEO and social previews

Built on the Next.js Metadata API — no extra packages.

| What                                   | Where                                   |
| -------------------------------------- | --------------------------------------- |
| Site name, description, URL, colours   | `lib/site.ts`                           |
| Default tags (title template, Open Graph, X card, robots) | `metadata` in `app/layout.tsx` |
| Per-page title/description/canonical   | `pageMetadata({ … })` at the top of each `app/*/page.tsx` |
| Share image (1200×630, all pages)      | `app/opengraph-image.tsx` — preview at `/opengraph-image` |
| Sitemap / robots / web app manifest    | `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts` |
| Google structured data (Organization)  | JSON-LD in `app/page.tsx`               |

- **Site URL** is `https://www.agie.ee` (`productionUrl` in `lib/site.ts`).
  Vercel redirects `agie.ee` → `www.agie.ee`, so `www` is the canonical
  address. If you change the primary domain in Vercel, update `productionUrl`
  too. `NEXT_PUBLIC_SITE_URL` overrides it (useful for testing).
- **Only production is indexable.** Preview deployments and local builds send
  `noindex` and a blocking `robots.txt`, so draft versions never appear in Google.
- **New page?** Export `metadata = pageMetadata({ title, description, path })`
  and add the path to `app/sitemap.ts`.
- **Check previews** after deploying: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  (also refreshes Facebook's cache), [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/),
  [Google Rich Results Test](https://search.google.com/test/rich-results). X has no
  public validator — post the link in a draft to see the card.

---

## Forms and deployment

- **No form backend exists yet.** All three forms (home contact section,
  `/contact` page, newsletter) open the visitor's email app via
  `sendViaEmailApp()` in `lib/mailto.ts` as a stop-gap. Replace that one
  function's callers when a backend exists. "Join Us" buttons link to the
  contact page.
  The plan for a proper membership form (Google Sheet via a Next.js route
  handler) is written up in `TODO.md`.
- **Hosting has not been decided.** [Vercel](https://vercel.com) is the simplest
  option for Next.js and supports the route handlers the form plan needs.
  Connect the GitHub repo and it builds automatically on every push to `main`.
