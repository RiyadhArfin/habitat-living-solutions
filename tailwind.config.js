/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f9f3',
          100: '#e1f2e5',
          200: '#c3e4cc',
          300: '#95cea6',
          400: '#60b07a',
          500: '#3c9358',
          600: '#2b7744',
          700: '#245f37',
          800: '#1f4c2e',
          900: '#1a3e27',
          950: '#0c2214',
        },
        earth: {
          50: '#faf8f5',
          100: '#f4efe8',
          200: '#e8ded0',
          300: '#d7c4af',
          400: '#c2a58b',
          500: '#ae8c6e',
          600: '#9d765b',
          700: '#835f4a',
          800: '#6b4e3f',
          900: '#574136',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'pattern-subtle': "radial-gradient(#2b774415 1px, transparent 1px), radial-gradient(#2b774410 1px, #ffffff 1px)",
        'pattern-grid': "linear-gradient(to right, #245f3708 1px, transparent 1px), linear-gradient(to bottom, #245f3708 1px, transparent 1px)",
        'pattern-leaves': "radial-gradient(#166534 0.75px, transparent 0.75px), radial-gradient(#166534 0.75px, #fafafa 0.75px)",
      }
    },
  },
  plugins: [],
}
