function clamp(minSize, maxSize, minWidth = "320px", maxWidth = "1280px") {
  return `clamp(${minSize}, calc(${minSize} + (${
    parseFloat(maxSize) - parseFloat(minSize)
  }) * ((100vw - ${minWidth}) / (${
    parseFloat(maxWidth) - parseFloat(minWidth)
  }))), ${maxSize})`;
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blueBG": "#26323e",
        "second-bg": "#FF6F61",
      },
      fontSize: {
        h1: clamp("2.5rem", "20rem"),
        h2: clamp("2rem", "3.5rem"),
        h3: clamp("1rem", "6rem"),
        p: clamp("1.5rem", "2rem"),
      },
      screens: {
        // Extra small phones and old devices
        xs: "320px",
        xs2: "350px",

        // Small smartphones (older iPhones, and small Android models)
        sm: "375px",
        sm2: "414px",

        // Medium to large smartphones (current generation devices)
        md: "480px",
        md2: "540px",

        // Tablets
        tablet: "600px",
        "tablet-lg": "768px",
        "tablet-xl": "900px",

        // Laptops and medium-sized devices
        laptop: "1024px",
        "laptop-md": "1100px",
        "laptop-middle": "1250px",
        "laptop-lg": "1366px",

        // Desktops and monitors
        desktop: "1440px",
        "desktop-lg": "1600px",
        "desktop-xl": "1920px",

        // Ultra-large devices
        "ultra-desktop": "2560px",
      },
    },
  },
  plugins: [],
};
