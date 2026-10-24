/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        card: 'var(--card)',
        sunk: 'var(--sunk)',
        ink: {
          DEFAULT: 'var(--ink)',
          muted: 'var(--ink-muted)',
        },
        line: {
          DEFAULT: 'var(--line)',
          strong: 'var(--line-strong)',
        },
        volt: {
          DEFAULT: 'var(--volt)',
          text: 'var(--volt-text)',
        },
        campo: {
          DEFAULT: 'var(--campo)',
          text: 'var(--on-campo)',
        },
        pista: {
          DEFAULT: 'var(--pista)',
          text: 'var(--pista-text)',
        },
      },
      fontFamily: {
        display: ['Archivo', 'Helvetica Neue', 'Arial', 'sans-serif'],
        sans: ['Instrument Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'pill': 'var(--radius-pill)',
      },
      boxShadow: {
        'lift': 'var(--shadow-lift)',
      },
    },
  },
  plugins: [],
}
