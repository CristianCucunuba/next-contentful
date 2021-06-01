module.exports = {
  mode: "jit",
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sacramento", "sans-serif"],
      }
    },
  },
  variants: {
  },
  plugins: [],
}
