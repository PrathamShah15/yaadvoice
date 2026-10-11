/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF7',
          100: '#FAF7F0',
          200: '#F4EFE6',
          300: '#EBE3D5',
          400: '#DED3C1',
          500: '#D0C1AB',
        },
        yaad: {
          purple: {
            50: '#F5F2F9',
            100: '#EBE5F3',
            200: '#D8CCE7',
            300: '#BFABDA',
            600: '#5F338D',
            700: '#4A2572',
            800: '#381B57',
            900: '#26113C',
            950: '#180927',
          },
          saffron: {
            50: '#FFF8F0',
            100: '#FEEDD9',
            400: '#F59E0B',
            500: '#D97706',
            600: '#B45309',
            700: '#92400E',
          },
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(38, 17, 60, 0.05), 0 4px 6px -2px rgba(38, 17, 60, 0.03)',
        'lifted': '0 10px 25px -5px rgba(38, 17, 60, 0.08), 0 8px 10px -6px rgba(38, 17, 60, 0.04)',
      },
    },
  },
  plugins: [],
};
