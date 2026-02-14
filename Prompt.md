# Next.js + Tailwind CSS Website Prompt (Refined for Aarambha)

Create a **frontend-only website in Next.js (latest stable)** using **Tailwind CSS**.
The website is for a **nonprofit social club named Aarambha**.
The design must be **minimal, clean, professional, and visually balanced**, with a **cohesive color palette**.

---

## 🎨 THEME CONFIGURATION

All colors and fonts must be **centralized** and **fully configurable** from one place.

1. In the project root, create a file: `theme.config.js`
   Export a single config object with **colors and fonts**:

```js
module.exports = {
  colors: {
    primary: "#0F172A",     // deep navy
    secondary: "#0D9488",   // teal
    accent: "#D97706",      // warm orange
    background: "#FAFAFA",  // light background
    text: "#1F2937",        // dark text
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Open Sans, sans-serif",
  },
};
```

2. **Tailwind** must reference these values via `tailwind.config.js`.
   **No hardcoded colors or fonts anywhere else.**

---

## 🧰 PROJECT REQUIREMENTS

* **Next.js** (latest stable)
* **Tailwind CSS only**
* Fully **frontend / static**
* Placeholder content for all sections
* **Responsive design** (mobile, tablet, desktop)
* **JavaScript** throughout

---

## 🧱 COMPONENT & PAGE STRUCTURE

### Global Layout

* **Header / Navbar** with navigation (sticky optional)

  * Links: Home | About | Programs | Team | Contact
  * Use **icons** for social links in the header/footer, no emojis
* **Footer** with social icons and contact info

---

### Pages

#### 1. Home

* **Hero section**

  * Title: “Aarambha”
  * Tagline: “Where Change Begins”
  * Primary Call-to-Action button
* Brief club description
* **Featured Programs** preview (3-4 cards)

#### 2. About

* Full club description
* **Mission / Vision** section
* Optional icon-based highlights for core values

#### 3. Programs

* Grid/list of programs
* Each program has:

  * Icon
  * Title
  * Short description

#### 4. Team

* **Team member cards**

  * Photo (placeholder)
  * Name & title
  * Short bio

#### 5. Contact

* **Contact form UI** (no submission logic)
* Contact details: email, phone, address
* Optional map placeholder

---

## 🧩 COMPONENT GUIDELINES

Create reusable, clean components:

* **Button** – supports primary/secondary styles
* **Card** – for programs, team, featured content
* **Hero** – title, tagline, CTA button
* **SectionTitle** – consistent typography
* **Navbar** – responsive, sticky optional
* **Footer** – social icons + contact info

**Tailwind classes must use theme tokens only**:

```css
bg-primary text-background
hover:bg-accent
font-heading
```

---

## 📐 TYPOGRAPHY

* Google Fonts:

  * Headings: Montserrat
  * Body: Open Sans
* Load fonts in `_document.tsx` or `app/head.tsx`
* Tailwind classes: `font-heading` and `font-body`

---

## 🎨 DESIGN & UI REFINEMENTS

* **Minimal and professional NGO aesthetic**
* **Proper color balance** (primary, secondary, accent)
* **Clean composition** – aligned sections, adequate whitespace
* **Icons instead of emojis** for programs, values, contact, social links
* Consistent card and button styling
* Subtle hover effects on buttons and links
* Fully responsive layout

---

## 🧼 CLEAN CODE & STRUCTURE

* JavaScript throughout
* Folder structure:

```
/components
/layouts
/pages (or /app)
/styles
theme.config.js
tailwind.config.js
```

* Well-commented and modular components
* No inline colors – use centralized theme

---

## 📦 RUNNING THE PROJECT

After cloning / setup:

```bash
npm install
npm run dev
```

* Static content ready to replace with real data
* Fully responsive, minimal, professional UI

---
