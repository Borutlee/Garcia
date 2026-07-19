/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 السطر ده هو المحرك الأساسي لسيستم الدارك مود بالـ كلاس
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        garcia: {
          950: 'rgb(var(--c-garcia-950) / <alpha-value>)',
          900: 'rgb(var(--c-garcia-900) / <alpha-value>)',
          800: 'rgb(var(--c-garcia-800) / <alpha-value>)',
          700: 'rgb(var(--c-garcia-700) / <alpha-value>)',
          600: 'rgb(var(--c-garcia-600) / <alpha-value>)',
        },
        gold: {
          DEFAULT: 'rgb(var(--c-gold) / <alpha-value>)',
          light: 'rgb(var(--c-gold-light) / <alpha-value>)',
          dark: 'rgb(var(--c-gold-dark) / <alpha-value>)',
        },
        cream: {
          DEFAULT: 'rgb(var(--c-cream) / <alpha-value>)',
          muted: 'rgb(var(--c-cream-muted) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 4px 24px -4px rgba(212, 175, 55, 0.35)',
      },
      backgroundImage: {
        'garcia-gradient':
          'linear-gradient(180deg, rgb(var(--c-garcia-900)) 0%, rgb(var(--c-garcia-950)) 100%)',
      },
    },
  },
  plugins: [],
}