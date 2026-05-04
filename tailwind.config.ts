import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: { center: true, padding: { DEFAULT: '1.25rem', md: '2rem' }, screens: { '2xl': '1280px' } },
    extend: {
      colors: {
        bg: {
          DEFAULT: '#070708',
          elev: '#0d0d10',
          card: '#111114',
        },
        line: { DEFAULT: '#1c1c22', bright: '#2a2a33' },
        ink: {
          DEFAULT: '#e8e8ea',
          dim: '#9a9aa3',
          faint: '#5a5a64',
        },
        accent: {
          DEFAULT: '#c8a96a',
          bright: '#e6c581',
          deep: '#8a6f3f',
        },
        signal: '#ff5b3a',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
        ar: ['var(--font-plex-ar)', 'system-ui', 'sans-serif'],
        'ar-display': ['var(--font-kufi-ar)', 'var(--font-plex-ar)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { mono: '0.04em', label: '0.18em', wide: '0.14em' },
      maxWidth: { content: '1280px' },
      fontSize: {
        label: ['11px', { lineHeight: '1.2', letterSpacing: '0.18em' }],
      },
      transitionTimingFunction: { 'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)' },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(0.8)', opacity: '0.7' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        },
        'fade-up': { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};

export default config;
