import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Inter Placeholder', 'sans-serif'],
      },
      colors: {
        // Primary colors
        'text-primary': '#18181B',
        'text-secondary': '#5D5D65',
        'badge-bg': '#F7F7F8',
        'logo': '#161A50',
        // Semantic aliases
        foreground: '#18181B',
        muted: '#5D5D65',
        background: '#FFFFFF',
      },
      fontSize: {
        // Custom sizes matching design system
        'h1': ['46px', { lineHeight: '50.6px', letterSpacing: '-1.9px', fontWeight: '500' }],
        'h1-mobile': ['42px', { lineHeight: '46.2px', letterSpacing: '-0.84px', fontWeight: '500' }],
        'h2': ['32px', { lineHeight: '38.4px', letterSpacing: '-1.3px', fontWeight: '500' }],
        'h3': ['24px', { lineHeight: '28.8px', letterSpacing: '-0.96px', fontWeight: '500' }],
        'h5': ['16px', { lineHeight: '19.2px', fontWeight: '500' }],
        'eyebrow': ['14px', { lineHeight: '16.8px', fontWeight: '400' }],
        'nav': ['14px', { lineHeight: '14px', letterSpacing: '-0.5px', fontWeight: '500' }],
        'body': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-medium': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'button': ['14px', { lineHeight: '14px', fontWeight: '500' }],
        'badge': ['12px', { lineHeight: 'normal', fontWeight: '400' }],
        'label': ['12px', { lineHeight: 'normal', fontWeight: '400' }],
      },
      spacing: {
        // Section spacing
        'section-y': '96px',
        'section-y-lg': '120px',
        'section-x': '48px',
        'section-y-mobile': '64px',
        'section-x-mobile': '16px',
        // Component spacing
        'card-gap': '24px',
        'card-gap-sm': '12px',
        'badge-x': '12px',
        'badge-y': '8px',
        'button-x': '22px',
        'button-y': '10px',
      },
      borderRadius: {
        'button': '5px',
        'badge': '6px',
        'card': '8px',
        'form': '8px',
      },
      maxWidth: {
        'container': '1184px',
      },
      boxShadow: {
        'border': 'inset 0 0 0 1px rgb(0 0 0)',
        'border-hover': 'inset 0 0 0 1px rgb(24 24 27)',
      },
      height: {
        'navbar': '66px',
        'card-image': '272px',
        'button': '34px',
        'button-lg': '40px',
      },
      gap: {
        'grid': '24px',
        'grid-row': '40px',
      },
    },
  },
  plugins: [],
}
export default config
