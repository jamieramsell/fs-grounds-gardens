# FS Grounds & Gardens — Project Brief & Context

> Single source of truth for this project's decisions and rationale.
> Origin: distilled from the planning conversation on claude.ai
> (share link — a snapshot, may expire): https://claude.ai/share/a1c6cd90-d118-4374-a7d9-aa01dcbc2d25
> Captured: 2026-08-17.

---

## The business

- **Name:** FS Grounds & Gardens — a new garden-maintenance business (cousin's).
- **Services:** hedges, lawns, pruning, clearances, general tidy-ups.
- **Branding:** dark-green + white, "FS" leaf logo, tagline **"Tidy · Maintain · Improve"**.
- **Current lead flow:** DM-only for enquiries & quotes via Instagram.
- **Base:** Rothley, Leicestershire.
- **Service area (provisional):** Charnwood, Melton & Leicester city — _cousin to confirm final list._
- **Inspiration reference:** "Vinny's" site (has Book Online / Subscribe). Runs on GoDaddy.

## Approved copy

- **Home-page meta description** (set in `app/layout.tsx`, M1/#1): "Reliable garden maintenance based in Rothley, Leicestershire. Hedge trimming, lawns, pruning, clearances and tidy-ups. Get a free quote today." (~139 chars.) Uses "Leicestershire" broadly rather than the provisional Charnwood/Melton/Leicester list until Fred confirms the area. Per-page descriptions get set in M5's SEO pass.
- **Brand font:** Montserrat (via `next/font/google`), matching the branding-sheet wordmark. Confirm with Fred if unsure.

## Role & goals

- Jamie is **building the site for his cousin Fred**; Fred owns the business and the assets.
- Deadline: **~2 weeks** for a release-ready v1.
- Assets: **placeholder photos to start**; real photos/copy/service-area/phone/socials come from cousin later.

---

## Locked decisions (and _why_)

### Stack: Next.js (App Router) + TypeScript + Tailwind, static export (`output: 'export'`)

- **The deciding reason:** Jamie wants this as a **low-stakes solo project to learn React before "YSE"** (an upcoming higher-pressure team project). This flipped the recommendation away from Astro.
- Trade-offs accepted: heavier / ships more JS than Astro → keep Lighthouse high via server components + sparing `"use client"`. No runtime SSR/server actions/API routes (fine for a brochure site). With `output: 'export'`, `next/image` needs `images.unoptimized` or a Cloudflare image loader.
- **Not** plain HTML/CSS (explicitly rejected). Astro was the runner-up.

### Content architecture: typed content collections from day one

- Gallery, blog, and reviews modelled as typed MDX/Markdown collections in `content/`.
- **Why:** makes a git-based CMS a **drop-in later** (M7) rather than a rewrite — so the cousin can self-edit gallery/blog/reviews without Jamie's involvement. This is the through-line of the whole plan.

### Hosting: Cloudflare Pages (free)

- Unlimited bandwidth, ~500 builds/month; fast for UK visitors. Effectively £0 forever at this traffic.
- No native forms → pair with a form service (below). Paid fallback if ever needed: Cloudflare Pages Pro ~$5/mo (won't be reached).
- Rejected: Vercel Hobby (bars commercial use — this is a business), Netlify (harder-to-forecast billing), GitHub Pages (least flexible fallback).

### Domain: `.co.uk` via Cloudflare Registrar

- `.co.uk` primary (UK local trade), ~£4–5/yr at wholesale, flat renewals. Consider grabbing `.com` too to protect the brand.
- **Register in the cousin's name/account so he owns the asset**; Jamie gets manage access.
- Avoid GoDaddy (upsells + renewal hikes).

### Email: Cloudflare Email Routing (free forwarding) now → Zoho Mail (free tier) later

- Launch: forward `hello@` (+ `info@`) → cousin's personal inbox, £0, receive-only.
- Upgrade path: Zoho Mail free tier (up to 5 users, one custom domain) for branded send/receive.

### Contact form: yes — simple and in-scope

- Static-friendly form service does the work: **Web3Forms** (free, generous) or Formspree; Netlify Forms only if hosted on Netlify (we're not).
- Add hidden **honeypot** + success/error states. Point submissions at **cousin's personal inbox for now**, swap recipient later.
- Also add zero-dependency routes: **tap-to-call (`tel:`), `mailto:`, Instagram link**.
- Short **UK-GDPR** privacy line by the form + a simple `/privacy` page.

### Reviews: static placeholder now, swappable later

- "Reviews coming soon" panel built as a reviews collection.
- Future: cousin self-edits via CMS, **or** swap in a live Google Reviews embed once he has a Google Business Profile (auto-updates + feeds local SEO).

### Parked (needs a backend / persistence)

- Subscription/newsletter and online booking (à la Vinny's). Deliberately deferred.

---

## Launch cost summary

≈ **£5/year** (just the domain) + free hosting + free email forwarding. (US-sourced prices — treat as ballpark, verify `.co.uk` at checkout.)

---

## Milestone plan

**Target:** M0–M6 = release-ready v1 (~2-week deadline). M7 = self-service editing. Backlog = later.

**Repo labels (as created on GitHub):** `setup` `ci` `infra` `deploy` `cms` `feature` `design` `content` `seo` `performance` `accessibility` `docs` `awaiting feedback`

**GitHub milestones (as created):** `[M1] Design & Layout` · `[M2] Home Page` · `[M3] Content Engine` · `[M4] Contact Section` · `[M5] SEO, Performance, Accessibility` · `[M6] v1 Launch`. M0 groundwork is done pre-implementation (no milestone); M7 (CMS) to be created later.

### M0 · Groundwork — setup & infrastructure

> Not a GitHub milestone. Jamie does these himself before starting the M1+ implementation issues.

- **Init Next.js + TypeScript + Tailwind** — `create-next-app` (App Router, TS, Tailwind, ESLint); `output: 'export'`; folders `app/ components/ content/ lib/`. _AC:_ `next build` emits static `out/`; dev runs; Tailwind applies. `setup`
- **Tooling: ESLint + Prettier + Husky + lint-staged** — format-on-commit, import order, editorconfig. _AC:_ pre-commit runs lint+format, fails on errors. `setup`
- **Repo hygiene: README, LICENSE, .gitignore, issue/PR templates** — _AC:_ new contributor can clone → run → build from README alone. `docs`
- **CI: GitHub Actions (install, typecheck, lint, build on PR)** — _AC:_ PRs blocked when build/lint/typecheck fail. `ci`
- **Cloudflare Pages deploy (production + preview)** — build `next build`, output `out`; per-PR previews. _AC:_ push to `main` → live on `*.pages.dev`; each PR gets a preview URL. `infra` `deploy`
- **Register `.co.uk` domain + DNS** — in cousin's Cloudflare account; attach to Pages. _AC:_ `fsgroundsandgardens.co.uk` serves over HTTPS with `www` redirect. `infra` `awaiting feedback`
- **Email forwarding (Cloudflare Email Routing)** — `hello@`/`info@` → cousin's inbox; MX/TXT. _AC:_ test email lands. `infra` `awaiting feedback`
- **Brand tokens in Tailwind config** — greens / near-black / white + typography from branding sheet. _AC:_ `bg-brand`, `text-brand`, heading/body scale available and used. `design`

### [M1] Design & Layout — design system & shell

- **Root layout + fonts + default metadata** — _AC:_ every route inherits layout, fonts, default title/description. `design`
- **Responsive header with mobile hamburger nav** — sticky on scroll. _AC:_ usable at 320px and desktop; keyboard-navigable. `design` `accessibility`
- **Footer** — Instagram, copyright, service-area line, quick contact. _AC:_ on all pages; links correct. `design`
- **UI primitives: `Section`, `Container`, `Button`/`CTA`, `Card`** — _AC:_ used across home page; documented props. `design`
- **Favicon, app icons, default OG image** — _AC:_ favicon + social preview render. `design`
- **Accessibility baseline** — skip link, focus states, semantic landmarks, contrast. _AC:_ axe/Lighthouse a11y, no critical issues on shell. `accessibility`

### [M2] Home Page — content sections

- **Hero** — headline (a "Tidy · Maintain · Improve" spin), subhead, primary CTA, placeholder hero image. _AC:_ responsive; CTA links to contact. `feature` `content`
- **Services section** — five services with icons. _AC:_ cards from a typed list; easy to add/remove. `feature` `content`
- **About / trust section** — "locally owned, attention to detail". _AC:_ placeholder copy, easily editable. `content`
- **Service-area section** — Rothley base; Charnwood/Melton/Leicester (cousin to confirm). _AC:_ area list data-driven (feeds SEO schema). `content` `awaiting feedback`
- **CTA wiring** — primary + secondary → contact / tel. _AC:_ all CTAs resolve; no dead buttons. `feature`

### [M3] Content Engine — editable gallery, blog & reviews

- **MDX/content pipeline + typed collections** — typed schemas (gallery, posts, reviews). The hook that makes the CMS drop-in later. _AC:_ adding a Markdown/MDX file surfaces with type safety. `feature` `content`
- **Gallery: schema + placeholders + grid** — image, alt, caption, optional before/after, order; responsive grid, lazy, `next/image`. _AC:_ placeholder gallery renders; new item = one file. `feature` `content`
- **Before/after: two side-by-side photos** — for v1, show before and after as a simple photo pair (no interactive slider). _AC:_ before/after pair renders responsively side by side (stacks on mobile). Slider deferred to backlog. `feature` `content`
- **Blog scaffolding** — post schema + one placeholder + index & detail routes. _AC:_ `/blog` lists; `/blog/[slug]` renders MDX. `feature` `content`
- **Reviews: schema + placeholder ("coming soon")** — _AC:_ renders from data; empty state = "Reviews coming soon". `feature` `content`

### [M4] Contact Section — contact & conversion

- **Contact form component** — name, email, phone, message + honeypot; validation. _AC:_ invalid input blocked; honeypot present. `feature`
- **Wire form to no-backend service (Web3Forms/Formspree)** — success/error states; recipient = cousin's personal inbox now. _AC:_ test submission arrives by email. `feature`
- **Direct contact routes** — `tel:` + `mailto:`, click-to-call on mobile, Instagram. _AC:_ phone dials on mobile; IG opens profile. `feature`
- **Privacy note + policy page** — UK-GDPR line by form + `/privacy`. _AC:_ form states what data is collected & why; policy linked in footer. `content` `docs`

### [M5] SEO, Performance, Accessibility

- **Per-page metadata + OpenGraph/Twitter cards** — _AC:_ each route unique title/description + social preview. `seo`
- **LocalBusiness JSON-LD structured data** — name, description, areaServed, phone, sameAs (Instagram). _AC:_ validates in Rich Results Test. `seo`
- **sitemap.xml + robots.txt** — _AC:_ sitemap lists all routes; robots allows indexing. `seo`
- **Image optimisation pass** — `images.unoptimized` or Cloudflare loader; compress placeholders; real alt text. _AC:_ no oversized images; alt everywhere. `performance` `accessibility`
- **Lighthouse + QA pass** — target ≥95 across; cross-browser + responsive; 404 page. _AC:_ scores hit target on mobile; no console errors. `performance` `accessibility` `seo`

### [M6] v1 Launch (the ~2-week target)

- **Go live on custom domain** — domain + HTTPS + `www` redirect in prod. _AC:_ site resolves on real domain. `deploy` `awaiting feedback`
- **Analytics** — Cloudflare Web Analytics (free, cookieless — no banner). _AC:_ pageviews recording. `infra`
- **Final content review with cousin** — swap real assets/copy; confirm area, phone, socials. _AC:_ sign-off from cousin. `content` `awaiting feedback`
- **Handover doc** — how to request changes now + how the CMS will work post-M7. _AC:_ one-page guide in repo + shared. `docs`
- **Tag `v1.0.0`** — _AC:_ release cut from `main`. `docs`

### M7 · CMS — self-service editing

> Milestone not yet created on GitHub; create it before assigning these two issues.

- **Pick & wire a git-based CMS** — evaluate Decap / Sveltia / TinaCMS against the collections; wire gallery, blog, reviews. _AC:_ editing a collection via the CMS commits a file and rebuilds. `cms`
- **Cousin auth + editing guide** — access + screenshot walkthrough. _AC:_ cousin adds a gallery item and a review end-to-end, no dev involvement. `cms` `docs` `awaiting feedback`

### Backlog · Down the Line

- **Interactive before/after slider** (React island) — deferred from v1; v1 uses a static photo pair.
- Live **Google Reviews embed** once he has a Google Business Profile.
- **Online booking** (à la Vinny's).
- **Zoho Mail** upgrade for branded send/receive.
- Regular **blog posts** for local SEO.
- **Newsletter / subscription** — revisit only if wanted (needs backend/persistence).

---

## Open items still needing the cousin

- Final service-area list (provisional: Charnwood, Melton, Leicester city).
- Real photos, copy, phone number, socials, sign-off.
- Domain registration in his account + a placeholder inbox to forward to (lead time Jamie doesn't control — get moving early).
- ~~Before/after slider in scope for v1?~~ **Resolved:** v1 shows a static before/after photo pair; interactive slider deferred to backlog.
