/** Tailwind-config voor de offertepagina. Bouwen: npx tailwindcss@3 -i src/input.css -o assets/estimate.css --minify */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        po: { DEFAULT: '#E8661A', dark: '#C9530F', soft: '#FDF0E7' },
        ink: '#1B1B1A',
        paper: '#F8F7F4',
        stone: '#E6E4DF',
        sand: '#EFEDE9',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        hand: ['Caveat', 'cursive'],
      },
    },
  },
}
