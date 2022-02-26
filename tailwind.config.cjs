const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    colors: {
      'cyan': 'hsl(180, 66%, 49%)',
      'dark-violet': 'hsl(257, 27%, 26%)',
      'red': 'hsl(0, 87%, 67%)',
      'gray': 'hsl(0, 0%, 75%)',
      'grayish-violet': 'hsl(257, 7%, 63%)',
      'very-dark-blue': 'hsl(255, 11%, 22%)',
      'very-dark-violet': 'hsl(260, 8%, 14%)',
      'white': 'hsl(0, 0%, 255%)',
      'light-gray': 'hsl(230, 25%, 95%)',
    },
    extend: {
      fontFamily: {
        sans: [
          'Poppins',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      backgroundImage: {
        'working-illustration': "url('/src/assets/images/illustration-working.svg')",
        'shorten-background': "url('/src/assets/images/bg-shorten-mobile.svg')",
      },
    },
  },
  plugins: [],
}
