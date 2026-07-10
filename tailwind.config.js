/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FFC907',
          navy: '#003366',
          cream: '#FFF7E1',
          white: '#FFFFFF',
          muted: '#F3F4F6',
          text: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['"Proxima Nova"', '"Avenir Next"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 45px -24px rgba(0, 51, 102, 0.35)',
      },
    },
  },
  plugins: [],
};
