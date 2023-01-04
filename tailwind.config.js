/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        heading1: ["40px", { fontWeight: "700" }],
        heading2: ["36px", { fontWeight: "600" }],
        heading3: ["28px", { fontWeight: "600" }],
        heading4: ["24px", { fontWeight: "600" }],
        heading5: ["18px", { fontWeight: "600" }],
        paragraph1: ["16px", { fontWeight: "600" }],
        paragraph2: ["16px", { fontWeight: "400" }],
        paragraph3: ["14px", { fontWeight: "600" }],
        paragraph4: ["14px", { fontWeight: "400" }],
        paragraph5: ["12px", { fontWeight: "400" }],
        heading1res: ["20px", { fontWeight: "700" }],
        heading2res: ["18px", { fontWeight: "600" }],
        heading3res: ["16px", { fontWeight: "600" }],
        paragraph1res: ["14px", { fontWeight: "700" }],
        paragraph2res: ["14px", { fontWeight: "400" }],
        paragraph3res: ["12px", { fontWeight: "700" }],
        paragraph4res: ["12px", { fontWeight: "400" }],
        paragraph5res: ["10px", { fontWeight: "700" }],
        paragraph6res: ["10px", { fontWeight: "400" }],
      },
      colors: {
        primary: "#034C5F",
        secondary: "#EE6457",
        text1: "#313131",
        text2: "#FFFFFF",
        text3: "#ADADAD",
        text4: "#6F6F6F",
        background1: "#FFFFFF",
        background2: "#97BEC6",
        background3: "#D7A151",
      },
      fontFamily: {
        poppins: "Poppins",
        lora: "Lora",
      },
      backgroundImage: {
        hero1: "url('/dist/customer/assets/img/hero1.png')",
        hero2: "url('/dist/customer/assets/img/hero2.png')",
        herojasakami: "url('/dist/customer/assets/img/herojasakami.png)",
      },
      boxShadow: {
        default: "0px 4px 24px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
