module.exports = {
  content: [
    './pages/**/*.{html,js,ts,tsx}',
    './components/**/*.{html,js,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Alegreya Sans', 'sans-serif'],
        body: ['Imprima', 'sans-serif'],
      },
      fontSize: {
        big: '13rem',
      },
    },
  },
  plugins: [],
};
