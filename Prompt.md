# THE REFINED "AARAMBHA" GENERATION PROMPT

**Role:** You are a Senior Frontend Engineer and UI/UX Designer specializing in Next.js 14+ and design systems.

**Task:** Build a high-performance, aesthetically "Elite" website for **Aarambha**, a nonprofit social club. The UI must feel like a modern SaaS or a high-end creative agency—clean, spacious, and impactful.

## 🛠 TECH STACK & ARCHITECTURE

* **Framework:** Next.js (App Router, JavaScript).
* **Styling:** Tailwind CSS + `next-themes` for Dark/Light mode.
* **Icons:** `react-icons` (Lucide/Phosphor sets).
* **Animations:** Framer Motion (Subtle scroll-reveal and hover effects).
* **Theming:** Centralized `theme.config.js` integrated into `tailwind.config.js`.

## 🎨 DESIGN SYSTEM (Theme Config)

Create `theme.config.js` in the root. Use these tokens strictly:

* **Primary:** `#0F172A` (Navy) | **Secondary:** `#0D9488` (Teal) | **Accent:** `#F59E0B` (Amber).
* **Dark Mode:** Background `#020617`, Surface `#0F172A`, Text `#F8FAFC`.
* **Light Mode:** Background `#FFFFFF`, Surface `#F1F5F9`, Text `#0F172A`.
* **Typography:** Montserrat (Headings), Inter (Body).

## 💎 UI/UX REQUIREMENTS

1. **Dark/Light Toggle:** A polished sun/moon switch in the Navbar.
2. **No Emojis:** Use `react-icons` exclusively for programs, social media, and UI cues.
3. **Modern Components:**
* **Navbar:** Floating Glassmorphism effect (`backdrop-blur-md`) with active-link indicators.
* **Hero:** Split-layout or centered with a "Glow" gradient background. Use a "Magnetic" CTA button.
* **Programs:** Use a **Bento Grid** layout for featured initiatives.
* **Team:** Circular or soft-rect avatars with social hover-overlays.
* **Buttons:** Define a "Brand" style—solid primary, outlined secondary, and a "ghost" style for less emphasis. **No mismatched colors.**



## 🧱 PAGE STRUCTURE

* **Home:** Hero -> Stats Counter (e.g., "50+ Events") -> Featured Programs (Bento) -> Mission Statement.
* **About:** 2-column "Story" layout with an "Our Values" icon grid.
* **Programs:** A filterable-style grid (UI only) with hover-scaling cards.
* **Team:** Professional cards with specific roles and "LinkedIn/Twitter" icons.
* **Contact:** Split layout. Left: Contact details with icons. Right: A modern form with floating labels and focus-ring effects.

## 🧼 CODE QUALITY & REUSABILITY

1. **Tailwind Integration:** Extend `tailwind.config.js` to map `theme.config.js` colors to utility classes like `bg-brand-primary`, `text-brand-accent`.
2. **Component Folder:**
* `Button.jsx` (Variant-based: primary, secondary, outline).
* `Section.jsx` (Standard padding/container wrapper).
* `Card.jsx` (Glass effect in dark mode, soft shadow in light mode).
* `ThemeToggle.jsx` (Using `next-themes`).



## 🚀 EXECUTION INSTRUCTIONS

1. Initialize the project structure.
2. Configure Tailwind to use the custom theme tokens.
3. Implement the Global Layout with the Dark Mode provider.
4. Build the components and assemble the 5 pages with placeholder content that feels premium and authentic to a Social Club.

---
