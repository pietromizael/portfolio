/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-half":
          "linear-gradient(to left, var(--tw-gradient-stops), transparent 100%)",
        "gradient-to-half-top":
          "linear-gradient(to top, var(--tw-gradient-stops), transparent 100%)",
      },
      maxWidth: {
        custom: "355px",
        container: "1535px",
      },
      maxHeight: {
        custom: "223px",
      },
      minWidth: {
        custom: "355px",
        container: "1535px",
      },
      minHeight: {
        custom: "223px",
      },
      width: {
        custom: "355px",
        container: "1535px",
      },
      height: {
        custom: "223px",
      },
      keyframes: {
        followUp: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-10px)", opacity: 1 },
        },
        followDown: {
          "0%": { transform: "translateY(-50)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        followDownContainer: {
          "0%": { transform: "translateY(-50px)" },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        followDownProjects: {
          "0%": { transform: "translateY(-50px)", opacity: 0 },
          "50%": { transform: "translateY(-50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
    animation: {
      followUp: "followUp 2s forwards",
      followDown: "followDown 2s forwards",
      followDownContainer: "followDownContainer 2s forwards ease-in-out",
      followDownProjects: "followDownProjects 2s forwards ease-in-out",
    },
    plugins: [],
  },
};
