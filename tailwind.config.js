const colors = require('tailwindcss/colors');
const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'inherit',
            'h2, h3, h4, h5': {
              'scroll-margin-top': spacing[32],
            },
            hr: {
              'border-color': colors.gray['700'],
            },
            '*': {
              color: 'inherit !important',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
