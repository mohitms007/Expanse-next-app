module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }
      'xs': '380px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl': '1280px',
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        'mono':['Dela Gothic One','Abril Fatface','monosopace'],
        'title':['DM Sans', 'sans-serif'],
      }
    },
  },
  variants: {},
  plugins: [ require('@tailwindcss/forms'),]
}