module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
        xl: "1536px",
        "sm-max": { max: "600px" },
        "md-max": { max: "900px" },
        "lg-max": { max: "1200px" },
        "xl-max": { max: "1536px" },
      },
      spacing: {
        "2x": "calc(200%)",
        "3x": "calc(300%)",
        "4x": "calc(400%)",
        "5x": "calc(500%)",
        "6x": "calc(600%)",
        "7x": "calc(700%)",
      },
      backgroundImage: {
        home: "url('/src/assets/img/back-home.png')",
        mint: "url('/src/assets/img/back-mint.png')",
        "ghost-buster": "url('/src/assets/img/ghost-buster.png')",
      },
      fontSize: {
        xs: ["13px", "15px"],
        "6xl": ["60px", "70px"],
        "7xl": ["80px", "94px"],
      },

      borderRadius: {
        "4xl": "30px",
      },

      fontFamily: { body: ["Roboto", '"Open Sans"'] },

      colors: {
        primary: "#39B3FF",
        secondary: "#003657",
        success: "#00AA06",
        warning: "#F1B800",
        error: "#FF0000",
      },
      boxShadow: {
        "fade-white": "inset 0px 0px 10px 20px #FFF",
        fab: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },

      dropShadow: {
        "fade-white": "inset 0px 0px 10px 20px #FFF",
        fab: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
};
