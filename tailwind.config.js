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
        big: '18rem',
      },
      dropShadow: {
        title: '0px 4px 4px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
