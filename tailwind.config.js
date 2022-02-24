module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "450px",
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
      },
      fontSize: {
        xs: [".75rem", "inherit"],
      },
      colors: {
        primary: "#39B3FF",
        secondary: "#003657",
        success: "#00AA06",
        warning: "#F1B800",
        error: "#FF0000",
      },
      boxShadow: {
        logo: "0px 8px 15px #00000026",
        "fade-white": "inset 0px 0px 10px 20px #FFF",
      },
      dropShadow: {
        logo: "0px 8px 15px #00000026",
      },
    },
  },
};
