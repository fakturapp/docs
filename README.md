# Faktur — Documentation

The Faktur documentation site (help center / public docs). A Next.js application that
serves the user-facing and developer-facing documentation for Faktur.

> Extracted from the former Faktur monorepo into its own repository. It is a standalone
> static/SSR documentation site with no shared source code with the other repos.

## Stack

- **Next.js** (App Router) + **React** + **TypeScript**
- **Tailwind CSS**
- ESLint flat config (`eslint.config.mjs`)

## Prerequisites

- Node.js `>= 24`

## Getting started

```bash
npm install
cp .env.example .env   # then fill in the values
npm run dev
```

## Environment

Required variables live in `.env.example`. Copy it to `.env` and fill it in.
`.env` is gitignored and must **never** be committed.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Project structure

```
src/            Documentation pages and components (App Router)
public/         Static assets
next.config.ts  Next.js configuration
```

## Deployment

Standard Next.js deployment: set the production environment variables, `npm run build`,
then `npm run start` (or deploy to your static/SSR host of choice).
