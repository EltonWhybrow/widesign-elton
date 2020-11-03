const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.ts"],
  theme: {
    fontSize: {
      base: "1rem",
    },
    extend: {
      colors: {
        primary: colors.teal,
      },
    },
  },
  variants: {},
  plugins: [],
};
