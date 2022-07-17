/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray1: '#F5F8FA',
        gray2: '#E5EAED',
        gray3: '#757575',
        emerald: '#128079',
      },
    },
  },
  plugins: [],
};
