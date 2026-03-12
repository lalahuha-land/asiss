# asiss official website

A React + Vite marketing site for asiss.my. The app renders a rich landing page with animated sections, service details, testimonials, pricing, and a multi-step contact flow.

**Features**
- Responsive landing experience with distinct desktop and mobile behavior
- Hero bento grid, services catalog with modal drilldown, and process steps
- Timeline with scroll-based animations and milestone cards
- Testimonials carousel and brand logo strip
- Pricing tiers with hover states and clear CTAs
- Multi-step contact questionnaire with progress, animations, and summary
- WhatsApp + Email CTAs with prefilled message on submit
- Scroll-to-top floating action button
- Toast UI support via shared components
- Supabase-backed CMS with hidden admin editor

**Tech Stack**
- React 19 + Vite 7
- React Router 7
- TanStack Query
- Tailwind CSS v4
- Framer Motion animations
- Lucide React icons
- Shadcn-style UI primitives in `src/components/ui`

**Project Structure**
- `src/App.tsx` app shell, providers, routing
- `src/main.tsx` entry point
- `src/pages` page-level views (currently `Home.jsx`)
- `src/pages.config.js` auto-generated page registry and `mainPage` selector
- `src/components` marketing sections and shared UI
- `src/components/ui` reusable UI primitives (toast, tooltip, toggle, etc.)
- `src/lib` query client, CMS, and utilities
- `src/content` CMS defaults
- `supabase` SQL schema

**Routing**
Pages are auto-registered from `src/pages` into `src/pages.config.js`. The landing page is controlled by the `mainPage` key in `src/pages.config.js`. `src/App.tsx` maps those pages to routes and wraps them with an optional layout.

**Environment Variables**
Define these for local development or deployment:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_ADMIN_PASSPHRASE`

Use `.env.example` as a template. Do not commit `.env`.

**CMS (Supabase)**
- Hidden admin route: `/admin`
- Auth: Supabase email/password
- Optional passphrase gate via `VITE_ADMIN_PASSPHRASE`
- Content storage: `public.site_content` (JSON)
- SQL schema: `supabase/schema.sql`

**SEO**
- `public/robots.txt`
- `public/sitemap.xml`
- Meta tags set in `index.html` (title, description, canonical, Open Graph, Twitter)

**Security Notes**
- `public.site_content` is public-read by design. Do not store secrets there.

**Scripts**
- `npm run dev` start the dev server
- `npm run build` typecheck and build
- `npm run lint` run ESLint
- `npm run preview` preview the production build

**Notes**
- The UI uses Framer Motion; ensure `framer-motion` is installed.
