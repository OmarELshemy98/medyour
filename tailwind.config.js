module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#00CFC5',
            dark: '#0099CC',
          },
          dark: {
            DEFAULT: '#001218',
            light: '#002D3A',
          }
        },
        fontFamily: {
          cairo: ['Cairo', 'sans-serif'],
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }