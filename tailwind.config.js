module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'spacex': ['Brandon Grotesque', 'brandon-grotesque', 'Helvetica', 'sans-serif']
      },
      colors: {
        'spacex-blue': {
          500: '#ff0000'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
