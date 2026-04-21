# Portfolio

Personal portfolio site. Stack mirrors [madhuprasad.in](https://madhuprasad.in): **Vite + React + TypeScript + Tailwind CSS** with **shadcn-style HSL tokens**, **GSAP ScrollTrigger** fade-ups, and **lucide-react** icons.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview
```

## Project structure

```
├── index.html
├── src/
│   ├── main.tsx          # React entry
│   ├── App.tsx           # section composition
│   ├── index.css         # Tailwind + design tokens
│   ├── data/site.ts      # edit this to change content
│   ├── hooks/useFadeUp.ts  # GSAP scroll-in animation
│   └── components/       # Navbar, Hero, About, Expertise, Work, Stats, Certifications, Contact, Footer
├── tailwind.config.ts
└── vite.config.ts
```

## Editing content

All text, links, stats, and section data live in `src/data/site.ts`. Update that single file to personalize the site — component files don't need edits for routine content changes.

## Design tokens

Defined in `src/index.css` under `:root` (light) and `.dark`:

| Token              | Light HSL        | Hex (≈)   |
| ------------------ | ---------------- | --------- |
| `--background`     | `37 100% 97%`    | `#FFF8EC` |
| `--foreground`     | `0 0% 15%`       | `#262626` |
| `--primary` / `--accent` | `25 95% 53%` | `#F97316` |
| `--card`           | `0 0% 100%`      | `#FFFFFF` |
| `--border`         | `37 30% 85%`     | `#E2D5C2` |
| `--radius`         | —                | `0.5rem`  |

Font: [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) loaded via Google Fonts in `index.html`.

## Notes

- `analysis.md` contains the source-site analysis this project was modeled on.
- Drop `resume.pdf` / `projects.pdf` into `public/` to wire up the download CTAs.
