
You are a **senior UI/UX engineer and frontend architect**.

The existing **Next.js + Tailwind NGO website for "Aarambha"** has visual issues that must be fixed.

Current problems visible in the UI:

• Dark hero section abruptly fading into white
• Bad gradient transition between sections
• Grey blur overlay appearing under hero
• White background sections look empty and unbalanced
• Color palette mismatch
• Some areas have white text on light backgrounds
• Dark theme looks good but light theme sections feel broken
• Inconsistent surface colors between sections

Your task is to **fix the entire color system and section composition so the website looks professional and balanced.**

---

# PRIMARY DESIGN RULE

Do NOT mix random dark and white sections.

Instead use a **structured surface system**.

The site must use **three background levels only**:

Base Background
Surface
Accent/Dark Section

---

# NEW PROFESSIONAL NGO COLOR PALETTE

Update the theme configuration.

Create or update:

theme.config.js

```
module.exports = {
  colors: {

    primary: "#0F172A",     // deep navy
    secondary: "#0D9488",   // teal
    accent: "#D97706",      // warm orange

    background: "#F8FAFC",  // soft neutral background
    surface: "#FFFFFF",     // card/section background
    muted: "#F1F5F9",       // alternate section background

    text: "#1E293B",
    textLight: "#64748B",

    border: "#E2E8F0",

    heroDark: "#0B1324"

  }
}
```

Important rule:

Avoid **pure white page backgrounds everywhere**.
Use **soft neutral backgrounds** to create visual depth.

---

# SECTION BACKGROUND SYSTEM

Use only these three section types:

### Base Page Background

Used for the main page container.

```
bg-background
```

### Surface Section

Used for most content sections.

```
bg-surface
```

### Alternate Section

Used to create visual rhythm.

```
bg-muted
```

### Dark Accent Section (Hero only)

```
bg-heroDark
text-white
```

---

# HERO SECTION FIX

The hero section currently has a broken gradient fade.

Remove the grey blur transition.

Instead:

Use a **clean dark hero block** with a **sharp section boundary**.

Example structure:

Hero Section

```
bg-heroDark
text-white
py-28
```

Then immediately follow with:

Next Section

```
bg-background
py-20
```

Do NOT use fade-to-white overlays.

Do NOT use blur gradients between sections.

Clean section separation looks more professional.

---

# IMPROVE SECTION RHYTHM

Sections should alternate like this:

Hero → dark
Section → surface
Section → muted
Section → surface
Section → muted

Example page structure:

Hero (dark)

About (surface)

Programs (muted)

Impact (surface)

Team (muted)

Contact CTA (primary accent)

Footer (dark)

This creates **visual flow and balance**.

---

# TEXT COLOR RULES

Light sections:

```
text-text
text-textLight
```

Dark sections:

```
text-white
text-white/80
```

Never place **light text on light backgrounds**.

---

# CARD DESIGN

Cards must sit on surface backgrounds.

Example:

```
bg-surface
border border-border
rounded-xl
shadow-sm
```

Hover state:

```
hover:shadow-md
hover:-translate-y-1
transition
```

---

# REMOVE BAD GRADIENTS

Remove any of these patterns:

```
bg-gradient-to-b
blur
fade overlays
```

Gradients are allowed only for:

Buttons
Subtle highlights

Never for **section transitions**.

---

# IMPROVE VISUAL DEPTH

Use spacing instead of gradients.

Section spacing:

```
py-20
md:py-28
```

Container:

```
max-w-6xl
mx-auto
px-6
```

---

# HERO IMPROVEMENT

Hero should include:

Title
Subtitle
Primary CTA

Add subtle animation with Framer Motion.

Hero layout example:

```
min-h-[70vh]
flex
items-center
justify-center
text-center
```

---

# FOOTER

Footer should match hero dark tone.

```
bg-primary
text-white
```

Include:

• social icons
• quick links
• organization description

---

# ACCESSIBILITY

Ensure proper contrast:

Dark text on light backgrounds
Light text on dark backgrounds

Avoid:

Low contrast grey text.

---

# FINAL RESULT EXPECTATION

The website must look like a **modern nonprofit website with clean visual hierarchy**.

After fixing:

✔ No grey blur between sections
✔ No white text on white backgrounds
✔ Balanced light theme
✔ Professional dark hero section
✔ Consistent spacing
✔ Clean section transitions
✔ Proper color hierarchy

The final UI must feel **clean, calm, trustworthy, and professional**, suitable for a real nonprofit organization.
