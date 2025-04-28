module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'hero-pattern': "url('/src/assets/pattern.svg')",
        
      },
      boxShadow: {
        'soft': '0 10px 30px -15px rgba(79, 70, 229, 0.3)',
      },
      backdropBlur: {
        'md': '12px',
        'lg': '16px',
      },
      colors: {
        'primary': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}