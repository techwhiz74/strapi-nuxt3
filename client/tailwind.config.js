/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: withOpacity("--color-primary"),
        primaryAcc: withOpacity("--color-primaryAccColor"),
        secondary: withOpacity("--color-secondary"),
        'light-grey': '#dcdcdc',
        'dark-grey': '#535353',
        'red': '#FA4D56',
      },
      fontFamily: {
        'serif': ['Inter', 'serif'],
      },
      animation: {
        'slide': 'slide 300ms ease-in-out',
      },
      keyframes: {
        slide: {
          '0%': { right: '-100px' },
          '100%': { right: '0px' },
        }
      },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
   },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
