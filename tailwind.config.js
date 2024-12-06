/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        hanken: ['Hanken', 'sans-serif'],
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        lavender: "hsl(241, 100%, 89%)",
        red: {
          100: "hsl(0, 50%,95%)",
          500: "hsl(0, 100%, 67%)"
        },
        yellow: {
          100: "hsl(39, 60%, 94%)",
          500: "hsl(39, 100%, 56%)"
        },
        teal: {
          100: "hsl(166, 60%, 93%)",
          500: "hsl(166, 100%, 37%)"
        },
        slate: "rgb(148 163 184)",
        blue: {
          100: "hsl(221, 100%, 96%)",
          slate: "hsl(252, 100%, 67%)",
          royal: "hsl(241, 81%, 54%)",
          650: "hsl(234, 85%, 45%)",
          violet: "hsla(256, 72%, 46%, 1)",
          800: "hsl(224, 30%, 27%)",
          persian: "hsla(241, 72%, 46%, 0)"
        },
      }
    },
  },
}
