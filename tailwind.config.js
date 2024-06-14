/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f8fafb",
          "200": "#f7f9fc",
          "300": "#e8eef1",
          "400": "#eaebef",
        },
        white: "#fff",
        aliceblue: "#ebf0f5",
        gray: {
          "100": "#8d9196",
          "200": "#24242c",
          "300": "#0b1627",
          "400": "#091626",
        },
        mintcream: "#ebf9f5",
        mediumaquamarine: "#3eaa86",
        darkslategray: {
          "100": "#364a61",
          "200": "#102a43",
        },
        lavender: "rgba(200, 228, 255, 0.25)",
        "green-1": "#219653",
        slategray: "#758393",
        "blue-1": "#2f80ed",
        gainsboro: "#d1dae6",
        "blue-2": "#2d9cdb",
        "green-2": "#27ae60",
        yellow: "#f2c94c",
        lavenderblush: "#fdf4f7",
        indianred: "#b93e5c",
        "purple-1": "#9b51e0",
        oldlace: "#fff7e6",
        orange1: "#ff9900",
        orange: "#f2994a",
        goldenrod: "#ffb834",
        royalblue: "rgba(15, 111, 222, 0.2)",
        red: "#eb5757",
        darkturquoise: "#00bfd9",
        darkgray: "#979ca8",
        lightslategray: "#9296a6",
      },
      spacing: {},
      fontFamily: {
        "helvetica-neue": "'Helvetica Neue'",
        "product-sans": "'Product Sans'",
        "pontano-sans": "'Pontano Sans'",
        "space-grotesk": "'Space Grotesk'",
      },
      borderRadius: {
        "4xs-5": "8.5px",
        "19xl-4": "38.4px",
        "20xl-8": "39.8px",
        "3xs": "10px",
        "5xs-1": "7.1px",
        "11xs-4": "1.4px",
        "12xs-2": "0.2px",
        "xs-4": "11.4px",
      },
    },
    fontSize: {
      "lgi-9": "19.9px",
      "mid-1": "17.1px",
      "base-4": "15.4px",
      "101xl": "115px",
      "29xl": "48px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
