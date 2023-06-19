module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_a0": "#000000a0", "900_bf": "#000000bf" },
        gray: {
          200: "#e9e9e9",
          900: "#1c1b1f",
          "900_bf": "#1f1f1fbf",
          "900_77": "#23222277",
          "900_bc": "#1f1f1fbc",
          "200_0f": "#efeeee0f",
          "200_51": "#efeeee51",
          "800_a0": "#4b4b4ba0",
          "300_b2": "#dededeb2",
        },
        green: { A700_01: "#05ff00", A700: "#00fa19" },
        white: {
          A700_00: "#ffffff00",
          A700_cc: "#ffffffcc",
          A700_77: "#ffffff77",
          A700: "#ffffff",
        },
        blue_gray: { "100_b2": "#d9d9d9b2" },
      },
      fontFamily: { sairacondensed: "Saira Condensed", roboto: "Roboto" },
      backgroundImage: {
        gradient: "linear-gradient(90deg ,#05ff00,#ffffff00)",
        gradient1: "linear-gradient(135deg ,#efeeee51,#efeeee0f)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
