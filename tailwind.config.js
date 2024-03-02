/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,

        fontFamily: {
          'sans': ['Lexend', 'sans-serif'], // Replace the default sans font
          // or define a custom name
          'lexend': ['Lexend', 'sans-serif'],
        },

      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
        '9xl': '7.5rem',
        '10xl': '8.75rem',
        '11xl': '10rem',
        '12xl': '11.25rem',
        '13xl': '12.5rem',
        '14xl': '13.75rem',
        '15xl': '15rem',
        '16xl': '16.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.20)',
        md: '0 8px 30px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}