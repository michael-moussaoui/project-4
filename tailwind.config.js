module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '280px',
      sm: '320px',
      md: '760px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black':'#000',
      'white':'#fff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#c920a8',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'slate-light': '#f8fafc',
      'slate-dark': '#334155',
      'slate': '#94a3b8',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      'marck': ['Marck Script', 'sans-serif'],
      'basker': ['Baskervville', 'sans-serif'],
      'Josefin': ["Josefin Sans", 'sans-serif'],

    },
    extend: {},
  },
  plugins: [],
}
