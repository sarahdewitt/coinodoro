/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'black': '#333333',
      'white-smoke': '#F2EEEB',
      'light-gray': '#E4DFDE',
      'light-red': '#FABEBE',
      'pastel-red': '#DF5858',
      'pastel-yellow': '#E4CC5A',
      'light-yellow': '#EEE8CD',
      'darktheme': '#333333',
      'lighttheme': "#F2EEEB",
      'bluetheme': '#0000ff'
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      xl: '1.5rem', //24px
      '2xl': '2rem', //32rem
      '3xl': '3rem',
      '4xl': '4rem',
      '5xl': '6rem'
    }
  },
  plugins: [],
};
