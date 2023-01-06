module.exports = {
  content: [
    './pages/**/*.{html,js,ts,tsx}',
    './components/**/*.{html,js,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Mosk', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
      fontSize: {
        big: '13rem',
      },
    },
  },
  plugins: [],
};
