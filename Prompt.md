Here is a clean, sharp, and highly specific prompt designed to produce a human-crafted, high-end production feel without generic "AI slop" patterns (like overuse of rounded cards, repetitive glassmorphism, vague hero copy, or artificial section dividers):

---

**Prompt:**

Act as a lead frontend architect and UI/UX designer specialized in high-trust, editorial-grade non-profit platforms.

You are fixing and redesigning the website for **Aarambha**, a youth-led non-profit organization in Nepal focused on grassroots community development, education, and social empowerment.

### CRITICAL REQUIREMENTS:

1. **NO AI SLOP OR GENERIC PATTERNS**:
* Avoid generic, cliché layouts (e.g., repeating identical floating rounded cards everywhere, glassmorphism blur traps, or meaningless decorative icons).
* Avoid filler text and vague claims. Write clear, grounded, real-world narrative copy tailored specifically to an NGO working in Nepal.
* Do NOT use smooth gradient fades or soft grey blur overlays between sections. All section transitions must be sharp, deliberate, and structural.


2. **COLOR SYSTEM & SURFACE ARCHITECTURE**:
Strictly enforce this palette and structured surface rule—do not mix random white and dark blocks:
* `primary`: `#0F172A` (Deep Slate Navy)
* `secondary`: `#0D9488` (Himalayan Teal)
* `accent`: `#D97706` (Warm Ochre / Gold)
* `background`: `#F8FAFC` (Soft Off-White Base — avoid pure `#FFFFFF` page background)
* `surface`: `#FFFFFF` (Card & Focused Section Background)
* `muted`: `#F1F5F9` (Alternate Section Background)
* `text`: `#1E293B` (High Contrast Slate Text)
* `textLight`: `#64748B` (Subtle Secondary Text)
* `border`: `#E2E8F0` (Structural Dividers)
* `heroDark`: `#0B1324` (Rich Solid Dark Hero Base)


3. **SECTION RHYTHM & FLOW**:
Alternate background levels systematically to create natural visual weight and rhythm:
* **Hero Section**: `bg-heroDark` (Solid, dark, confident, with sharp bottom boundary)
* **Mission & Core Focus**: `bg-surface` (Clean, structured reading experience)
* **Key Programs**: `bg-muted` (Card grid with subtle borders, high contrast)
* **Impact Metrics**: `bg-surface` (Grounded numbers with clear typographic hierarchy)
* **Community Stories / Field Updates**: `bg-muted` (Editorial style content layout)
* **Call-to-Action (Donate / Join)**: `bg-primary` or `bg-accent` (Solid, high-intent block)
* **Footer**: `bg-heroDark` or `bg-primary` (Clean, functional)


4. **TYPOGRAPHY & CONTENT HIERARCHY**:
* Use bold, high-contrast headings with tight leading (`tracking-tight`).
* Ensure strict WCAG AAA contrast compliance: high-contrast dark text (`#1E293B`) on light backgrounds, crisp white text on dark sections.
* Use strict 1-line code comments only when necessary (`// comment`). Do not use multi-line comments (`/* ... */`).


5. **CARDS & COMPONENTS**:
* Standard cards: `bg-surface border border-border rounded-lg p-6 shadow-sm`
* Hover interactions: Subdued and tactile (`hover:border-slate-400 hover:shadow-md transition-all duration-200`)
* Buttons: Sharp, solid background buttons with crisp focus states.



Produce the full, clean, standalone code implementing this exact architecture.