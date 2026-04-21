# madhuprasad.in — Site Analysis

> The HTML shell is empty (`<div id="root"></div>`) — a JS-rendered React SPA. Per the prompt's rule #2 this would normally stop here; everything below was recovered by fetching and inspecting the compiled `index-*.js` and `index-*.css` bundles directly.

## Content

- **Title**: `Madhuprasad Ramalingam - Head of Digital Products | Fintech Leader`
- **Meta description**: `Senior fintech professional with 18+ years of experience in digital transformation, IT project management, and business process reengineering across Banking, NBFC, and Financial Services.`
- **Primary headline (hero h1)**: `Digital Transformation Leader Architecting Scalable & Intelligent Financial Ecosystems`
- **Sub-headline**: `An ambitious, performance-driven senior professional transforming the fintech landscape through innovation and strategic leadership.`
- **Navigation items** (section anchors): `Home`, `About`, `Expertise`, `Work`, `Stats`, `Certifications`, `Contact`
- **Main sections**:
  - **Hero** — one-line positioning statement with primary/secondary CTAs.
  - **About** — long-form bio framed as "Architecting end-to-end digital solutions for financial services".
  - **Expertise** — grid of competencies (Digital Transformation, Project & Change Management, Team Leadership, Stakeholder Management, Budgeting & Cost Control, Cybersecurity & Compliance, etc.).
  - **Work / Strategic Projects** — past engagements at IDFC, Belstar Microfinance, Green Malabar Finance, EncoreTheme; bullet outcomes (LOS/LMS rollouts, 50+ branches Day-1, 10+ API integrations, mutual-fund modules).
  - **Stats / Work Impact** — Years of Experience, Team Members Led, APIs & systems connected, Cross-functional professionals, Brand Collaborations, lending portfolio figures.
  - **Certifications** — Six Sigma Green Belt, PMI, and GenAI-for-PM track (Data Landscape, Prompt Engineering, Practical Application).
  - **Academic Credentials** — MBA Finance (First Class), plus institutions (Bharathidasan University, Bishop Heber College, Nehru Memorial College, Pondicherry University, Indian Statistical Institute).
  - **Contact** — email/LinkedIn/Credly links with a "Let's Connect" CTA.
- **Calls to action**:
  - `View Work` → `#work`
  - `Download Resume` → download route (PDF)
  - `Download Projects` → download route (PDF)
  - `Get in Touch` / `Let's Connect` → `#contact`
  - `LinkedIn` → `https://www.linkedin.com/in/madhuprasad-ramalingam`
  - Email → `mailto:r.madhuprasad@gmail.com`
  - Credly → `https://www.credly.com/users/madhuprasad-ramalingam`
- **Footer links** (grouped): social (LinkedIn, Credly, Email) + section anchors mirroring the nav. Exact grouping not separable from the bundle.

## UI Style

- **Color palette** (HSL tokens from the compiled CSS — approximate hex in parens):
  - `--background`: `hsl(37 100% 97%)` ≈ `#FFF8EC` (warm cream/peach)
  - `--foreground` (body text): `hsl(0 0% 15%)` ≈ `#262626`
  - `--primary` / `--accent` / `--ring`: `hsl(25 95% 53%)` ≈ `#F97316` (Tailwind orange-500)
  - `--card`: `#FFFFFF`
  - `--secondary`: `hsl(37 50% 90%)` ≈ `#F1E6D3`
  - `--muted`: `hsl(37 30% 92%)` ≈ `#EFE6DB`
  - `--border` / `--input`: `hsl(37 30% 85%)` ≈ `#E2D5C2`
  - Dark theme defined but not confirmed as user-toggleable: `--background` `hsl(0 0% 11%)` ≈ `#1C1C1C` with the same orange primary.
- **Typography**:
  - Font family (headings + body): `Instrument Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif`
  - Base font size: browser default (Tailwind `text-base` = 1rem) — no explicit override in CSS
  - Heading scale: oversized display (`text-6xl md:text-8xl font-bold` on hero/about/work section titles); supporting text at `text-2xl lg:text-4xl`
- **Layout**:
  - Container: `max-w-7xl` (≈ 1280px) with `px-*` rhythm
  - Tailwind breakpoints: 640 / 768 / 1024 / 1280
  - Composition: flex for nav/hero rows, CSS grid for expertise/certifications card grids
  - Spacing rhythm: Tailwind's 4px scale, vertical section padding in the `py-16`..`py-24` range
- **Component patterns**:
  - Buttons: rounded (`--radius: 0.5rem`), solid orange primary with white text + outlined secondary; hover tints `bg-primary/80..90` and `bg-primary/5`
  - Cards: white surface, warm border (`border` token), hover border tint to primary, subtle `shadow-primary/10` on hover
  - Forms: standard shadcn input styling (token `--input` matches border)
  - Hero: centered stacked text with gradient-free flat cream background, GSAP fade-up entrance
- **Imagery style**:
  - Lucide-react icons for expertise/contact tiles (SVG paths for Briefcase, MapPin, Mail, ShieldCheck, etc.)
  - No hero photography; decorative typography + subtle backgrounds carry visual weight
- **Tone**: formal, confident, minimal; senior-executive register with measured-results emphasis.

## Tech Signals

- **Framework**: React 18 SPA bundled with Vite (asset hashes `index-<hash>.js/.css`, module script tag, empty `#root`).
- **Routing**: `react-router` / `react-router-dom` (error-boundary strings, "Index routes must not have child routes").
- **Data**: `@tanstack/react-query` ("No mutationFn found" string present).
- **Styling**: Tailwind CSS + shadcn/ui token system (`--background`, `--foreground`, `--primary`, `--radius`, `.dark` class convention, sidebar token namespace).
- **Animation**: GSAP with `ScrollTrigger` and `Observer` plugins (`Please gsap.registerPlugin(...)` strings).
- **Icons**: lucide-react (SVG path signatures match lucide set).
- **Analytics / marketing**: none visible in the HTML shell or bundle strings (no GA4, GTM, Segment, Plausible, Hotjar, Meta Pixel).
- **Hosting hints**: static asset path `/assets/...` — consistent with Vite static deployment (Netlify / Vercel / Cloudflare Pages / S3+CDN, not distinguishable).

## Caveats

- HTML shell contained no body content — all content above was reconstructed from the Vite bundle and is therefore the author's source strings, not necessarily the rendered DOM order.
- Exact section order, footer grouping, and any content loaded from a separate data file could not be confirmed without running the app.
- Color hex values are my conversions from HSL tokens; rendered browser colors may differ by <1% due to HSL→sRGB rounding.
- Dark mode tokens exist but I could not confirm whether a theme-toggle is wired up in the UI.
- No analytics / tag-manager detected in the initial bundle — a deferred loader could still inject one at runtime.
- Resume/Projects "Download" destinations are referenced as `download` but the exact static PDF paths aren't observable without a network crawl.
