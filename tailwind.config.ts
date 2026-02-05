import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F3E8DF',
        'background-secondary': '#E8D1C5',
        foreground: '#2D1A17',
        'foreground-muted': '#5C5248',
        accent: '#452829',
        'accent-light': '#6B4250',
        'accent-dark': '#2D1A17',
        border: '#C9BFA8',
        'border-light': '#DED3C0',
        cream: '#FAF8F0',
        sand: '#E8D1C5',
        stone: '#57595B',
        charcoal: '#3D342C',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#2D1A17',
            '--tw-prose-headings': '#2D1A17',
            '--tw-prose-links': '#452829',
            '--tw-prose-quotes': '#5C5248',
            maxWidth: '70ch',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
