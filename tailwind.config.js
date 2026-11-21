// "Bone & Ink" theme. Colour values live as RGB channels in CSS variables
// (src/index.css) so they flip automatically for the dark "Abyss" palette
// and still support Tailwind opacity modifiers like `bg-accent/10`.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;
const solid = (name) => `rgb(var(--${name}))`;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bone: token('bone'),         // page background
        paper: token('paper'),       // raised surfaces
        ink: token('ink'),           // text, primary buttons
        'ink-2': token('ink-2'),     // secondary text
        muted: token('muted'),       // meta text
        hairline: token('hairline'), // 1px rules and borders
        accent: token('accent'),     // sonar blue (light) / glacier (dark)
        'accent-hover': token('accent-hover'),
        'on-accent': token('on-accent'),
        danger: token('danger'),
      },
      fontFamily: {
        display: ['Archivo', '"Arial Narrow"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        sans: ['"Inter Tight"', 'ui-sans-serif', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        card: '10px',
        chip: '6px',
      },
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'slideIn': 'slideIn 0.3s ease-in-out',
        'sonar': 'sonar 3.6s cubic-bezier(0.2, 0.6, 0.3, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        sonar: {
          '0%': { transform: 'scale(0.4)', opacity: '0.55' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: solid('ink-2'),
            h1: { color: solid('ink') },
            h2: { color: solid('ink') },
            h3: { color: solid('ink') },
            h4: { color: solid('ink') },
            h5: { color: solid('ink') },
            strong: { color: solid('ink') },
            a: {
              color: solid('accent'),
              '&:hover': { color: solid('accent-hover') },
            },
            code: {
              color: solid('ink'),
              backgroundColor: solid('paper'),
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
