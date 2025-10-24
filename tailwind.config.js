/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#54157E',
        'secondary': '#FFBF00',
        'extra': '#F6EDF6',
        'white': '#FFFFFF',
        'dark': '#212121',
        'bpurpleDark': '#1A1A2E',
        'bpurplePrimary': '#6B46C1',
        'bpurpleLight': '#A855F7',
        'lavender': '#C4B5FD',
        'electricBlue': '#3B82F6'
      },
      
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        'headline-1': [
          '70px', 
          {
            lineHeight: '85.33px',
            letterSpacing: '-0.015em',
            fontWeight: 700
          }
        ],
        'headline-2': [
          '48px', 
          {
            lineHeight: '58.51px',
            letterSpacing: '-0.015em',
            fontWeight: 700
          }
        ],
        'headline-3': [
          '24px', 
          {
            lineHeight: '29px',
            letterSpacing: '-0.015em',
            fontWeight: 700
          }
        ],
        'headline-4': [
          '20px', 
          {
            lineHeight: '24px',
            letterSpacing: '-0.015em',
            fontWeight: 500
          }
        ],
        'body-1': [
          '16px', 
          {
            lineHeight: '20px',
            letterSpacing: '0.005em',
            fontWeight: 400
          }
        ],
        'body-2': [
          '12px', 
          {
            lineHeight: '15px',
            letterSpacing: '0.004em',
            fontWeight: 400
          }
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        movedown: 'movedown 4s linear 1',
      },
      keyframes: {
        movedown: {
          '0%': { transform: 'translateY(-100px)' },
          '100%': {transform: 'translateY(0)'}
        },
      }
    },
  },
  plugins: [],
}
