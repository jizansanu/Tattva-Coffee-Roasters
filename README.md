# Tattva Coffee Roasters

Marketing site for **Tattva Coffee Roasters**, JP Nagar, Bengaluru.

> **Tattva** (तत्त्व) — Sanskrit for *essence*, the underlying principle.

## Stack
- Next.js 15 (App Router) + React 19
- TypeScript
- Tailwind CSS v4 (CSS-first theme)
- Fonts: Fraunces (headlines), Inter (body)
- Icons: lucide-react

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Brand system

| Token | Hex | Use |
|---|---|---|
| `--color-cream` | `#F5EFE4` | Page background |
| `--color-bone` | `#EDE4D3` | Section accent |
| `--color-espresso` | `#2A1A12` | Primary text, dark sections |
| `--color-bark` | `#4A2E1F` | Headings, secondary text |
| `--color-clay` | `#B8593A` | Accent (terracotta) |
| `--color-moss` | `#5C6B4A` | Secondary accent |
| `--color-stone` | `#7A6B5D` | Muted text |
| `--color-line` | `#D9CFBE` | Hairlines |

Type:
- Headlines: **Fraunces** (regular, slight negative tracking)
- Body / UI: **Inter**
- Eyebrows: Inter, uppercase, +18% letter-spacing, clay color

Design modelled on the Beano Webflow template, rebuilt as Tattva.

## Pages
| Route | Page |
|---|---|
| `/` | Home — hero, collection, video bands, story, process, quote, testimonials, CTA |
| `/coffee` | Filterable product grid (16 coffees) |
| `/coffee/[category]` | decaf · filter · espresso · cold-brew · single-origin · signature-blends |
| `/product/[slug]` | Product detail (16) |
| `/menu` | Café drinks menu |
| `/about-us` | Story, values, process, founder quote |
| `/gallery` | Masonry image gallery |
| `/faq` | Accordion FAQ |
| `/testimonials` | Reviews |
| `/contact-us` | Address, hours, contact form |
| `/blog` + `/blog/[slug]` | Journal |

## Where to edit content
All copy + data lives in [`lib/content.ts`](lib/content.ts). Look for `// TODO`:

- [ ] Exact JP Nagar address (phase, cross, street)
- [ ] Phone number, email, confirmed hours
- [ ] Real coffee names / origins / tasting notes / prices
- [ ] Real café menu + prices (`app/menu/page.tsx`)
- [ ] Real customer testimonials
- [ ] Founder name for the quote section
- [ ] Real blog articles

## ⚠️ Media to replace before launch
- **Product bag images** (`public/images/products/*.png`) are the Beano template's
  pastel bag mockups — they read **"Beano Coffee"** on the bag. Replace with Tattva
  bag renders before going live.
- **Hero / section images + the two background videos** are downloaded from the
  Beano template for layout parity. Swap for real Tattva photography/video when
  available.
- **Logo** — drop `logo.svg` (or `.png`) into `/public` and render it in
  `components/Nav.tsx` + `components/Footer.tsx` (currently a placeholder ring).

## Media credits / source
Images and videos were pulled from the Beano Webflow template CDN for prototyping.
They are placeholders, not licensed Tattva assets.

## Deploy
Push to GitHub, then deploy on Vercel — zero config.

## Structure
```
app/
  layout.tsx              # Fonts, metadata, root
  page.tsx                # Home (composes sections)
  globals.css             # Tailwind v4 theme + brand tokens (base in @layer base)
  coffee/                 # listing + [category]
  product/[slug]/         # product detail
  about-us / menu / gallery / faq / testimonials / contact-us / blog
components/
  Nav, Hero, Collection, HowWeMake, Explore, Story, Process,
  Quote, Brew, Testimonials, ClosingCta, Footer,
  BgVideo, PageBanner, ProductGrid
lib/
  content.ts              # All copy + data
public/
  images/ (hero, sections, products) + video/ (2 mp4+webm+poster)
```
