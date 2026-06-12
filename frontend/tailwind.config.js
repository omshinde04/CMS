/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './context/**/*.{js,jsx}',
    './hooks/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#eef2f9',
          100: '#d5e0f0',
          200: '#abc0e1',
          300: '#7a9acb',
          400: '#4e74b4',
          500: '#2d5599',
          600: '#1e3f7a',
          700: '#162e5c',
          800: '#0e1f40',
          900: '#071228',
          950: '#030a18',
        },
        saffron: {
          50:  '#fff8eb',
          100: '#ffecc7',
          200: '#ffd98a',
          300: '#ffc04d',
          400: '#ffa31a',
          500: '#e88600',
          600: '#c46800',
          700: '#9e4e00',
          800: '#7a3b00',
          900: '#5a2b00',
        },
        gold: {
          DEFAULT: '#C8942A',
          light:   '#E8B84B',
          dark:    '#A07020',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        card:    '0 2px 8px 0 rgba(14,31,64,0.08)',
        'card-hover': '0 8px 24px 0 rgba(14,31,64,0.14)',
        nav:     '0 1px 0 0 rgba(14,31,64,0.08)',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};
