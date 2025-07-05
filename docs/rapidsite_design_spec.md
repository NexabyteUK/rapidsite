# RapidSite – Web Design & Build Specification

*Version 1.1 – 5 July 2025*

---
## 1 Purpose
This document is the **single source of truth** for developers and designers building the public marketing microsite located at **https://nexabyte.co.uk/rapidsite** (301‑redirect also from https://rapidsite.io). It includes brand colours, typography, component library, information architecture, functional requirements, and legal pages. Deliverables must match this spec to avoid re‑work charges.

---
## 2 Brand & Visual Language
### 2.1 Palette
| Token | Hex | Usage |
|-------|-----|-------|
| **Background** | `#EBEDF3` | Global page background, section split backgrounds. |
| **Foreground / Navy** | `#2C2A4E` | Primary text, heading colour, navbar background on desktop. |
| **Accent 1 (Primary CTA)** | `#D74653` | Buttons, price highlights, links on hover. |
| **Accent 2 (CTA Hover)** | `#9E3D51` | Button hover, active states. |
| **Accent 3 (Subtle)** | `#653350` | Secondary icons, tag backgrounds. |

*Contrast:* All body text must be WCAG AA against `#EBEDF3`.

### 2.2 Typography
| Element | Font | Weight | Fallback |
|---------|------|--------|----------|
| Headings (H1–H3) | **Roboto** | 700 | Arial, sans‑serif |
| Body | **Roboto Condensed** | 400/500 | Roboto, Helvetica, sans‑serif |
| Display numeral (pricing) | **Roboto** | 600 | |
*Google Fonts self‑hosted; include font‑display: swap.*

### 2.3 Spacing & Grid
* 12‑column responsive grid (max width 1280 px, 72 px side‑gutters desktop).
* Breakpoints: **≤640 px**, **641‑1024 px**, **1025‑1280 px**, **≥1281 px**.
* Section vertical rhythm: 96 px desktop, 64 px tablet, 48 px mobile.

---
## 3 Information Architecture
| URL | Page purpose | Key components |
|-----|--------------|----------------|
| `/rapidsite` | Home / Landing | Hero, Benefits, Plan Cards, Process, Testimonials, FAQ, Final CTA, Footer |
| `/rapidsite/pricing` | Detailed plan comparison | Pricing table, FAQ, CTA |
| `/rapidsite/how-it-works` | 3‑step visual process | Step cards, timeline, video embed |
| `/rapidsite/contact` | Lead form | Native contact form, phone, address |
| `/rapidsite/legal/tos` | Terms of Service | Imported markdown |
| `/rapidsite/legal/dpa` | Data Processing Addendum | Imported markdown |
| `/rapidsite/legal/sla` | Support SLA | Table |
| `/rapidsite/legal/buyout` | Buy‑Out Licence | One‑pager |
| `/rapidsite/privacy` | Privacy Policy | Standard |
| `/payment-issue` | Account on hold | Stripe pay‑link, support link |

All legal documents will be converted to markdown and statically served on this site.

---
## 4 Component Library
| Component | Description | Variants |
|-----------|-------------|----------|
| **Navbar** | Logo left, links right. Transparent over hero, switches to `#2C2A4E` solid after 80 px scroll. | Desktop, mobile drawer |
| **Hero Section** | Two‑column: headline, sub‑title, CTA button (**Accent 1**) + mock‑up image carousel. | Mobile stacks columns |
| **Plan Card** | Price large (Poppins 48 px), plan name, feature list, CTA. Boost card emphasised with subtle shadow. | Boost, Grow |
| **Comparison Table** | Row for feature, columns Boost / Grow. Sustain row collapsed with “After term” note. | Standard, condensed mobile |
| **Process Step** | Icon circle (`#D74653`), step title, short copy. | 3 steps |
| **Testimonial Slider** | Avatar, quote, star rating. | Auto‑play every 6 s |
| **FAQ Accordion** | Expand/collapse, arrow rotates Accent 1 on open. | |
| **Footer** | 3 columns: Links, Contact, Social icons; dark (`#2C2A4E`) inverted colour. | |

---
## 5 Copy & Content Blocks
### 5.1 Hero copy
> **Headline (H1):** *“A better website in one week — pay monthly.”*
> **Sub‑title:** *“RapidSite by Nexabyte builds, hosts and maintains your site for a flat monthly fee. No big up‑front costs.”*
> **Primary CTA:** “Get My Free Mock‑Up” (links to `/rapidsite/contact`).

### 5.2 Benefits copy
> **Section heading (H2):** *“Why RapidSite?”*
>
> **Intro paragraph:** RapidSite is the fast‑track, pay‑monthly website service built for time‑poor small‑business owners who want agency‑level quality without the agency‑level invoice. We do the heavy lifting—design, build, hosting and updates—so you can stay focused on running the business.
>
> **Benefit bullets (unordered list):**
> * **Launch in 7 days** – no six‑week build marathons.
> * **Pay monthly, not thousands up front** – from £99.
> * **Stress‑free hosting & security updates** – we keep your site safe and online while you run the business.
> * **UK support next business day** – real humans on email and phone.
> * **Global edge hosting & SSL included** – your site loads fast everywhere.
> * **Scale when you’re ready** – bolt‑ons for e‑commerce, SEO, booking forms.
>
> **Visual:** 2‑column grid; left: bullet list; right: illustrative graphic (speed gauge / credit‑card icon stack). Accent‑1 check‑icons.

### 5.3 Plan details (used in Pricing section)
| Plan | Monthly | Term | Initial Payment | Includes |
|------|---------|------|---------|----------|
| **Boost** | **£109** | 12 months | £109 | 7‑day build, hosting, SSL, next‑biz‑day support |
| **Grow** | **£ 99** | 18 months | £ 99 | Same as Boost |
| **Sustain Plan** | £49 | N/A (month‑to‑month) | — | Hosting, SSL, security monitoring |
| **Buy‑Out Licence** | £600 + VAT one‑off | — | — | Full editable source code transfer |

Process Steps: *Mock‑Up → Build → Launch → Ongoing Care*.

---
## 6 Functional Requirements
1.  **Forms** – Native HTML contact form (`name`, `email`, `message`) for lead generation.
2.  **Analytics** – Plausible script (self‑hosted) in `<head>`; no GA4.
3.  **Performance** – Lighthouse ≥ 95 on mobile.
4.  **SEO** – `react‑helmet‑async` with unique meta/title per page.

---
## 7 Tech Stack & Deployment
* **React 18 + Vite** (TypeScript)
* **CSS** – Tailwind v3 (`@tailwindcss/typography` for prose)
* **Hosting** – Cloudflare Pages project `rapidsite` in **nexabyte-main** CF account.
* **CI/CD** – GitHub Actions workflow identical to client template (`./dist`).
* **SPA routing** – React Router v6; fallback rule `/*` → `/index.html`.
* **Env vars** – PLAUSIBLE\_DOMAIN, POSTMARK\_TOKEN.

---
## 8 Other
> **Glossary**
> **Lighthouse** = Google’s open‑source audit tool that scores pages for performance, accessibility, best‑practices and SEO. Minimum target score 95/100 on mobile.

| Check | Tool | Threshold |
|-------|------|-----------|
| Colour contrast | axe‑core | AA for text, AAA for large text |
| Keyboard nav | Manual | No trap, visible focus |
| Lighthouse Performance | Google LH | 95+ mobile |
| Forms labels | eslint‑plugin‑jsx‑a11y | No violations |

---
## 9 Legal Pages Content Map
| Page | Source doc | Path |
|------|-----------|------|
| Terms of Service | Playbook MSA (Order‑Form ver.) | `/rapidsite/legal/tos` |
| Data Processing Addendum | Technical Workflow §5 | `/rapidsite/legal/dpa` |
| Support SLA | Technical Workflow §5 | `/rapidsite/legal/sla` |
| Buy‑Out Licence | Technical Workflow §5 | `/rapidsite/legal/buyout` |
| Privacy Policy | Adapt from Nexabyte main | `/rapidsite/privacy` |
| Cookie Policy | Short banner + link | `/rapidsite/cookies`

Markdown files live in `/src/legal/*.md` and rendered via MDX.

---
## 10 Acceptance Criteria (Definition of Done)
1.  All pages delivered pixel‑perfect against Figma mock‑ups.
2.  Lighthouse ≥95/95/100/100 (mobile).
3.  All links functional; contact form sends email notification.
4.  Stripe Quote link opens in modal or new tab (no console errors).
5.  Page paths match IA table; 301 redirect from `rapidsite.io` passes.
6.  README.md updated with local dev instructions, including clear guidance for analytics scripts and other third-party integrations.

---