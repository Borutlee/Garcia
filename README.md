# Garcia Restaurant & Cafe — Landing Page

One-page React + Vite landing page for **Garcia Restaurant & Cafe**, built with
Tailwind CSS, Framer Motion, and Lucide icons — matching a dark-luxury
green/gold design.

## 1. Installation

```bash
# Create the Vite React project (if starting from scratch)
npm create vite@latest garcia-restaurant -- --template react

cd garcia-restaurant

# Install Tailwind CSS + PostCSS + Autoprefixer
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install Framer Motion (animations) and Lucide React (icons)
npm install framer-motion lucide-react
```

> If you're using the files provided here directly, just run `npm install`
> in the project root — `package.json` already lists all dependencies.

## 2. Run the dev server

```bash
npm run dev
```

## 3. Project structure

```
garcia-restaurant/
├── index.html
├── package.json
├── tailwind.config.js      # brand colors: garcia (greens), gold, cream
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx             # assembles all sections
    ├── index.css           # Tailwind directives + base styles
    ├── data/
    │   └── menuData.js     # mock categories, dishes, offers, gallery
    ├── components/         # small reusable pieces
    │   ├── Button.jsx
    │   ├── Card.jsx
    │   └── SectionHeading.jsx
    └── sections/           # page sections, one per file
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Menu.jsx        # interactive category switcher (React state)
        ├── Offers.jsx
        ├── OrderOnline.jsx
        ├── Reservation.jsx # booking form UI (no backend yet)
        ├── Gallery.jsx
        └── Footer.jsx
```

## 4. Notes for next steps

- **Reservation form**: currently just logs to console and shows an alert.
  Wire `handleSubmit` in `src/sections/Reservation.jsx` to your real API.
- **Images**: all images use `placehold.co` placeholders. Swap the `image`
  URLs in `src/data/menuData.js` and the sections themselves with real photos.
- **Fonts**: Playfair Display (display/headings) + Poppins (body), loaded via
  Google Fonts in `index.html`.
- **Colors**: all brand colors are defined once in `tailwind.config.js` under
  the `garcia`, `gold`, and `cream` keys — change them there to re-theme the
  whole site.
