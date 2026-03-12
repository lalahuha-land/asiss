# asiss official website

A React + Vite marketing site for asiss.my. The app renders a rich landing page with animated sections, service details, testimonials, pricing, and a multi-step contact flow, plus a lightweight auth gate deployments.

**Features**
- Responsive landing experience with distinct desktop and mobile behavior
- Hero bento grid, services catalog with modal drilldown, and process steps
- Timeline with scroll-based animations and milestone cards
- Testimonials carousel and brand logo strip
- Pricing tiers with hover states and clear CTAs
- Multi-step contact questionnaire with progress, animations, and summary
- Scroll-to-top floating action button
- App-level auth/public settings check
- Toast UI support via shared components

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
- `src/lib` auth context, query client, app params, and utilities
- `src/api` client setup

**Routing**
Pages are auto-registered from `src/pages` into `src/pages.config.js`. The landing page is controlled by the `mainPage` key in `src/pages.config.js`. `src/App.tsx` maps those pages to routes and wraps them with an optional layout.

**Auth**
Authentication and public settings checks run inside `src/lib/AuthContext.jsx`, which calls endpoints and handles `auth_required` and `user_not_registered` states. App parameters are sourced by `src/lib/app-params.js` from query params and `localStorage`.

**Environment Variables**
Define these for local development or deployment:
- `VITE_BASE44_APP_ID`
- `VITE_BASE44_FUNCTIONS_VERSION`
- `VITE_BASE44_APP_BASE_URL`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_ADMIN_PASSPHRASE`

Use `.env.example` as a template. Do not commit `.env`.

The app also supports an `access_token` query param that is stored in `localStorage` and used by the client.

**CMS (Supabase)**
- Hidden admin route: `/admin`
- Auth: Supabase email/password
- Optional passphrase gate via `VITE_ADMIN_PASSPHRASE`
- Content storage: `public.site_content` (JSON)
- SQL schema: `supabase/schema.sql`

**Security Notes**
- `public.site_content` is public-read by design. Do not store secrets there.

**Scripts**
- `npm run dev` start the dev server
- `npm run build` typecheck and build
- `npm run lint` run ESLint
- `npm run preview` preview the production build

**Notes**
- The UI uses Framer Motion and the Base44 SDK; if you see module-not-found errors, ensure `framer-motion` and `@base44/sdk` are installed.
