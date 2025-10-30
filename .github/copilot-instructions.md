## Repository quick notes for AI coding assistants

This is a small Next.js (App Router) + MDX portfolio site. Keep guidance concise and project-specific so contributors and AI agents can be productive immediately.

- Framework: Next.js 14 (App directory). See `app/layout.tsx` for the site root and global metadata.
- Pages: `app/` contains routes. Pages may be `.ts`, `.tsx` or `.mdx` (see `next.config.mjs` pageExtensions).
- MDX: MDX support via `@next/mdx` + `remark-gfm`. Frontmatter is parsed with `gray-matter` in `components/MDXLayout.tsx` (expects a `source` prop).
- Styling: Tailwind CSS + `@tailwindcss/typography`. Globals in `styles/globals.css`.

Key developer workflows

- Install & dev: `npm i` then `npm run dev` (per `README.md` and `package.json`).
- Build: `npm run build` (Next build). Notes in `next.config.mjs`:
  - ESLint and TypeScript errors do NOT block CI/build here (`eslint.ignoreDuringBuilds: true`, `typescript.ignoreBuildErrors: true`). Don't flip these without checking the maintainer's intent.
- Deploy: Vercel is recommended. Static export supported via `next export` (see README).

Project conventions & patterns (important to follow)

- File extensions: The project treats `.mdx` as first-class pages. When adding a content page prefer `.mdx` if it's article-like (see `app/tableaux-collections-dictionnaires/page.mdx`).
- Component types: Most UI files are server components by default. Client components explicitly include `'use client'` at the top (e.g., `components/NavBar.tsx`, `ThemeToggle.tsx`). Only add 'use client' when DOM APIs or hooks (state, effect) are required.
- Absolute imports: Code uses `@/` alias for project imports (e.g., `@/components/NavBar`). Respect existing `tsconfig.json` path mapping when moving files.
- MDX frontmatter: Use `gray-matter` frontmatter fields expected by `MDXLayout` — `title`, `date`, `author`, `description` — so pages render header metadata correctly.
- API routes: Implemented as Next route handlers (`route.ts`) under `app/api/...`. Follow the request/response shape used in existing endpoints (see `app/api/contact/route.ts`).

Integration points & external services

- n8n webhook: README documents configuring `N8N_WEBHOOK_URL` in `.env.local`. Keep webhook integration and secrets out of the repository.
- Vercel: The code checks `VERCEL_URL` and `NEXT_PUBLIC_SITE_URL` for building absolute URLs (see `lib/site.ts`). Use those envs for canonical URLs.

When editing or adding features, check these files first

- `app/layout.tsx` — global layout, metadata, theme bootstrap script.
- `next.config.mjs` — MDX setup, page extensions, and redirects (example: `/downloads/:file` → `/d/:file`).
- `components/MDXLayout.tsx` — how MDX frontmatter is consumed.
- `components/NavBar.tsx`, `components/Footer.tsx` — common UI patterns and client vs server component usage.
- `lib/site.ts` — site URL resolution logic (do not hardcode URLs elsewhere).

Quick examples

- Add an MDX page: create `app/some-guide/page.mdx` with frontmatter `---\ntitle: ...\ndate: ...\nauthor: ...\ndescription: ...\n---` and content. The global layout will render `MDXLayout` if you import or wrap accordingly.
- Add an API route: create `app/api/your-endpoint/route.ts` and export the appropriate handler (see `app/api/contact/route.ts` for example).

Editor/CI cautions

- Avoid enabling strict TypeScript or lint blocking in CI without coordinating with the maintainer — the project currently permits build-time ignores.
- Keep public assets in `public/` (images under `public/cases/...`).

If anything here is unclear or you'd like more detail (example PRs, conventions for new content types, or test harness), tell me which area to expand and I'll iterate.
