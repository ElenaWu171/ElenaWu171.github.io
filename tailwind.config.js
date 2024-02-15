/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
    fontSize: {
      // 電腦版-特大標題
      desktopXlTitle: "3.25rem",
      // 電腦版-大標題
      desktopLgTitle: "2.5rem",
      // 電腦版-標題
      desktopTitle: "2.25rem",
      // 電腦版-內文
      desktopBodyText: "1.625rem",
      // 電腦版-後台內文
      desktopBackendBodyText: "1.125rem",
    },
    colors: {
      // 主色
      mainGreenColor: "#90c31f",
      mainYellowColor: "#FFF100",
      mainBrownColor: "#AA7E51",
      // 輔助色
      SecPinkColor: "#F7A4A4",
      SecOrangeColor: "#FEBE8C",
      // 基礎色
      baseBlackColor: "#000000",
      baseBlackGrayColor: "#444444",
      baseGrayColor: "#868686",
      baseGrayWhiteColor: "#C2C2C2",
      baseWhiteColor: "#FFFFFF",
    },
    // compilerOptions: {
    //   // ...
    //   types: ["element-plus/global"],
    // },
  },
  plugins: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
};
