# Tech Spec — Muhammad Abdulrafarid Portfolio

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.3.0 | UI framework |
| react-dom | ^18.3.0 | React DOM renderer |
| vite | ^6.0.0 | Build tool / dev server |
| @vitejs/plugin-react | ^4.3.0 | Vite React plugin |
| typescript | ^5.6.0 | Type safety |
| tailwindcss | ^3.4.0 | Utility CSS framework |
| postcss | ^8.4.0 | CSS processing |
| autoprefixer | ^10.4.0 | CSS vendor prefixes |
| lucide-react | ^0.460.0 | Icons (Mail, Linkedin, Download, X, Send, Menu) |

All already installed via init script.

## Component Inventory

### shadcn/ui

No shadcn/ui components needed — the design is fully custom-built with simple structural elements. All UI is lightweight enough to build directly with Tailwind.

### Custom Components

| Component | Location | Props | Notes |
|-----------|----------|-------|-------|
| Navbar | `src/components/Navbar.tsx` | — | Fixed, scroll-aware border/shadow |
| SectionWatermark | `src/components/SectionWatermark.tsx` | `text: string` | Reusable massive bg text |
| MarqueeStrip | `src/components/MarqueeStrip.tsx` | — | CSS animated scrolling strip |
| ChatWidget | `src/components/ChatWidget.tsx` | — | 3-state: collapsed / bubble / expanded |
| SectionReveal | `src/components/SectionReveal.tsx` | `children, delay?, className?` | IntersectionObserver wrapper |

### Section Components

| Section | File | Notes |
|---------|------|-------|
| HeroSection | `src/sections/HeroSection.tsx` | 2-col grid, portrait + stats card, floating badges |
| AboutSection | `src/sections/AboutSection.tsx` | 2-row: header + image/text |
| ExperienceSection | `src/sections/ExperienceSection.tsx` | Header + horizontal image gallery |
| TestimonialsSection | `src/sections/TestimonialsSection.tsx` | Quote + attribution + portrait |
| ContactSection | `src/sections/ContactSection.tsx` | Centered CTA with email buttons |
| Footer | `src/sections/Footer.tsx` | Simple footer bar |

### Hooks

| Hook | File | Purpose |
|------|------|---------|
| useScrolled | `src/hooks/useScrolled.ts` | Returns boolean when scroll > 10px, for navbar styling |
| useInView | `src/hooks/useInView.ts` | IntersectionObserver wrapper for reveal animations |

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Marquee scroll | CSS @keyframes | Dual-track translateX(-50%), linear infinite | Low |
| Section reveal (fade-up) | CSS + IntersectionObserver | Add `.revealed` class, CSS transition opacity+translateY | Low |
| Chat bubble appear | CSS transition | Opacity + translateY on state change | Low |
| Chat panel open/close | CSS transition | Scale(0.95↔1) + opacity, transform-origin bottom-right | Low |
| Navbar scroll state | CSS transition | Border + shadow transition on scroll state change | Low |
| Staggered children | CSS transition-delay | Increment delay via index (100ms × index) | Low |

**All animations are CSS-based. No GSAP or Framer Motion needed.**

## State & Logic

### Chat Widget State Machine

Three states managed with `useState<'collapsed' | 'bubble' | 'expanded'>`:
- **bubble** (initial): Shows text bubble above avatar
- **expanded**: Full chat panel, bubble hidden
- **collapsed**: Just the avatar button

Transitions:
- bubble → expanded: click avatar
- expanded → collapsed: click X or ESC key
- collapsed → expanded: click avatar
- bubble → collapsed: click X on bubble

### Scroll-Triggered Navbar

`useScrolled` hook: `useState(false)` + scroll event listener with 10px threshold. Sets `isScrolled` state which toggles navbar border and shadow classes.

### Section Reveals

`useInView` hook: IntersectionObserver with 0.15 threshold. Sets `isInView` state which adds `.revealed` class triggering CSS transition.

## Other Key Decisions

### No Routing
Single-page site with anchor links (#home, #about, #experience, #testimonials, #contact). Smooth scroll via CSS `scroll-behavior: smooth`.

### No External Fonts
Inter is loaded via Google Fonts `<link>` in index.html. No additional font dependencies.

### Chat is Visual-Only
No backend integration. Pre-written demo Q&A messages stored in a local array. Input submit adds user message to list + auto-response after 500ms delay.

### Image Gallery — Horizontal Scroll
Native CSS `overflow-x: auto` with `scroll-snap-type: x mandatory` on container, `scroll-snap-align: start` on items. No carousel library needed.

### Responsive Strategy
Mobile-first Tailwind classes. Primary breakpoint at 1024px (lg:) for two-column layouts. Watermark sizes use `clamp()` for fluid scaling across all viewports.
