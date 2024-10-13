/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NotoSans: ['Noto-Sans', 'sans-serif'],
      },
      borderRadius: {
        'custom-shape': '14px 100px 10px / 100px 100px 43px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite ',
      },
      colors: {
        textWhite: "#f1f2ed",
        textGray: "#cbccc6",
        primaryBGblack:"#111111",
        secondaryBGgray: "#4a4a4a",
        buttonYellow:"#d8ff44"
        
      }
    },
  },
  plugins: [],
}

