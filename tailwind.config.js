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
        },
        'starship-blue': {
          300: 'rgba(101, 106, 178, 255)'
        },
        'superheavy-red': {
          300: 'rgba(202, 77, 81, 255)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
