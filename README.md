# FS Grounds & Gardens

Marketing website for FS Grounds & Gardens, a garden-maintenance business based in
Rothley, Leicestershire.

Built as a static site so it is fast, cheap to host, and editable by a
non-developer later on. See [`docs/context/project-brief.md`](docs/context/project-brief.md)
for the full brief, decisions, and milestone plan.

## Stack

- **Next.js 16** (App Router) with **static export** (`output: 'export'`)
- **TypeScript**
- **Tailwind CSS v4** (theme lives in `app/globals.css`, no `tailwind.config`)
- **ESLint + Prettier**, enforced on commit via **Husky + lint-staged**
- Hosted on **Cloudflare Pages**

## Prerequisites

- Node.js 20 or later
- npm

## Local development

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:3000
```

## Useful scripts

| Script                 | What it does                             |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the local dev server               |
| `npm run build`        | Build the static site into `out/`        |
| `npm run lint`         | Run ESLint                               |
| `npm run typecheck`    | Type-check with `tsc --noEmit`           |
| `npm run format`       | Format the codebase with Prettier        |
| `npm run format:check` | Check formatting without writing changes |

## Building for production

```bash
npm run build
```

This emits a fully static site to `out/`. There is no Node server at runtime.

## Deployment

Deployed on **Cloudflare Pages**, connected to this repository:

- **Build command:** `npm run build`
- **Build output directory:** `out`
- Pushes to `main` deploy to production; every pull request gets a preview URL.

## Project structure

```
app/         App Router routes, layout, and global styles
components/   Reusable UI components
content/      File-based content (gallery, blog, reviews) — added in M3
lib/          Shared helpers and utilities
public/       Static assets served as-is
docs/         Project brief and context
```
