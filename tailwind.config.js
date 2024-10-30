module.exports = {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        container: 'var(--container-color)',
        stroke: 'var(--stroke-color)',
        primary: 'var(--primary-color)',
        foreground: 'var(--foreground-color)',
      },
      fontFamily:{
        pacifico: ['Pacifico', 'cursive'],
      }
    }
  },
  plugins: [],
};
