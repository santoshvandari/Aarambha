Create a fully frontend-only website in **Next.js (latest stable)** using **Tailwind CSS**.

The site is for a nonprofit social club named **Aarambha**.  
It must be **simple, clean, professional**, and **highly configurable**.

---

## 🎨 THEME CONFIGURATION

Make all colors and fonts configurable from **one central place**.

1. In the project root, create:
   - `theme.config.js`
   - This file should export a single config object with:
     • Primary Color
     • Secondary Color
     • Accent Color
     • Background Color
     • Text Color
     • Font Families

Example structure:
```

module.exports = {
colors: {
primary: "#0F172A",
secondary: "#0D9488",
accent: "#D97706",
background: "#FAFAFA",
text: "#1F2937",
},
fonts: {
heading: "Montserrat, sans-serif",
body: "Open Sans, sans-serif",
},
};

```

2. Tailwind must be configured to use these values via `tailwind.config.js` references to `theme.config.js`.

Do not hardcode colors or fonts anywhere else.

---

## 🧰 PROJECT REQUIREMENTS

• Use **Next.js**  
• Use **Tailwind CSS** only  
• No backend / no database  
• Static placeholder content inside components

---

## 🧱 COMPONENT & PAGE STRUCTURE

### Global Layout
- `Header` with navigation
- `Footer` with social icons

Navigation:
Home | About | Programs | Team | Contact

---

### Pages

#### 1. **Home**
- Hero section
  • Title: “Aarambha”
  • Tagline: “Where Change Begins”
  • Primary Call-to-Action button
- Brief description
- Featured Programs preview

#### 2. **About**
- Full club description
- Mission / vision

#### 3. **Programs**
- A list/grid of programs
- Icons, titles, description

#### 4. **Team**
- Team member cards
  • Photo (placeholder)
  • Name
  • Title
  • Short bio

#### 5. **Contact**
- Contact form UI only (no submission logic)
- Contact details
  • Email, phone, address

---

## 🧩 COMPONENT GUIDELINES

Create reusable components:
- Button
- Card
- Hero
- Section Title
- Navbar
- Footer

All Tailwind classes must use theme tokens.

Example:
```

bg-primary text-background
hover:bg-accent
font-heading

```

---

## 📐 TYPGRAPHY & FONTS

Use Google Fonts:
• Headings: Montserrat
• Body: Open Sans

Load these in the app `_document.js` or via app/head.

Configure Tailwind to use:
```

font-heading
font-body

```

defined via `theme.config.js`.

---

## 🎨 RESPONSIVENESS

Every page must be fully responsive (mobile + tablet + desktop).

---

## 🧼 CLEAN CODE GUIDELINES

• Use TypeScript  
• Well structured folders:
  /components
  /layouts
  /pages (or app/*)
  /styles
  theme.config.js
  tailwind.config.js
• Add comments where needed
• No inline Tailwind colors — always reference centralized theme

---

## 📦 FINAL EXPECTATION

Output a **complete Next.js project** with:

✔ Tailwind CSS theme configured  
✔ Central color + font config  
✔ Clean component-based UI  
✔ Ready to run:
```

npm install
npm run dev

```

Make the UI minimal and professional following NGO website aesthetic.
```

---