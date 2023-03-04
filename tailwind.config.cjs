/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(240px, 1fr))',
      },
      cursor: {
        listen: 'url(./assets/speaker.svg), pointer',
      },
    },
  },
  plugins: [],
};
