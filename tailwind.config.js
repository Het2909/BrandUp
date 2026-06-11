module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f6fbff',
          100: '#eaf5ff',
          200: '#c7e4ff',
          300: '#94c7ff',
          400: '#5fa7ff',
          500: '#3077f2',
          600: '#2257d3',
          700: '#1f47a8',
          800: '#1a3b84',
          900: '#18326a'
        }
      },
      boxShadow: {
        glow: '0 20px 80px rgba(48, 119, 242, 0.18)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
