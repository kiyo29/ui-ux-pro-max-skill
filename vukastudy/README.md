# VukaStudy — Landing Page

A high-end, animated marketing landing page for **VukaStudy**, a South African
EdTech platform helping Grade 12 (matric) students grind through CAPS-aligned
past papers and track their progress toward exam success.

> **Vuka and Grind. Past papers. Real results.**

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for all animation (entrance reveals, scroll-triggered
  reveals, marquee, parallax, hover/press micro-interactions)
- **lucide-react** for icons
- **next/font** (Inter, weights 400/600/800)

## Getting Started

### 1. Install dependencies

```bash
cd vukastudy
npm install
```

### 2. Add your logo

Place your logo file at:

```
public/VukaStudy_Logo_Final.png
```

It's referenced by the navbar and footer via `next/image`. Recommended size:
~600×160px (transparent background) for crisp rendering at all sizes.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm run start
```

## Project Structure

```
vukastudy/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata, global cursor glow
│   ├── page.tsx         # Composes all landing page sections
│   └── globals.css      # Brand CSS variables, glass card & gradient text utilities
├── components/
│   ├── Navbar.tsx        # Sticky navbar — opacity/blur on scroll, mobile menu
│   ├── Hero.tsx           # Dark hero, animated headline, parallax bg, CTAs
│   ├── AnimatedHeadline.tsx # Char-by-char staggered text reveal
│   ├── FloatingOrbs.tsx   # Parallax gradient glow orbs (red/green/blue)
│   ├── DeviceMockup.tsx   # Floating animated phone mockup
│   ├── SocialProof.tsx    # Stats bar + subject marquee
│   ├── MarqueeTicker.tsx  # Infinite horizontal subject ticker
│   ├── Features.tsx       # 3 glassmorphism feature cards
│   ├── HowItWorks.tsx      # 3-step section with animated connector line
│   ├── Pricing.tsx         # Pricing cards, featured plan with red glow border
│   ├── CTASection.tsx      # Full-width dark gradient CTA
│   └── Footer.tsx          # Links, socials, tagline, logo
└── lib/
    └── utils.ts           # `cn` classnames helper
```

## Brand

| Token         | Value     |
| -------------- | --------- |
| Primary Red    | `#DF3832` |
| Primary Green  | `#1A6B3C` |
| Primary Blue   | `#003082` |
| Hero Background | `#0A0A0A` |

Brand colors are defined as CSS variables in `app/globals.css` and as Tailwind
utilities (`vuka-red`, `vuka-green`, `vuka-blue`, `vuka-dark`) in
`tailwind.config.ts`.

## Notes

- All animations respect `prefers-reduced-motion`.
- The custom cursor glow effect automatically disables on touch devices.
- Mobile breakpoint priority starts at 375px — the layout is fully responsive
  and tested down to that width.
- Images use `next/image` for lazy loading and automatic optimization.
