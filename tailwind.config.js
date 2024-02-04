/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'google_side':'#eaf1fb',
        'google_fontColor':'rgb(95, 99, 104)',
        'google_hoverBG':'#dde3ec',
        'google_slideOut':'#f6f8fc',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.mail-styles': {
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 30px 1fr 150px)',
          alignItems: 'center',
          borderRadius: '0.25rem',
          borderBottomWidth: '2px',
          '&:hover': {
            borderBottomWidth: '2px',
          },
          height: '40px',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

