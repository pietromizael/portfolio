/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        "custom": "355px",
      },
      maxHeight: {
        "custom": "223px",
      },
      keyframes: {
        followUp: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-80px)", opacity: 1},
        },
        followDown: {
          "0%": { transform: "translateY(-148px)" },
          "50%": { transform: "translateY(-128px)", opacity: 0},
          "100%": { transform: "translateY(-100px)", opacity: 1},
        },
        followDownContainer: {
          "0%": { transform: "translateY(-50px)" },
          "100%": { transform: "translateY(0)", opacity: 1},
        },
        followDownProjects: {
          "0%": { transform: "translateY(-50px)", opacity: 0},
          "50%": { transform: "translateY(-50px)", opacity: 0},
          "100%": { transform: "translateY(0)", opacity: 1},
        }
      },

    },
    animation: {
      followUp: "followUp 2s forwards",
      followDown: "followDown 6.5s forwards",
      followDownContainer: "followDownContainer 2s forwards ease-in-out",
      followDownProjects: "followDownProjects 5s forwards ease-in-out",
    },
    plugins: [],
  },
};
