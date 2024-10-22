/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Note the inclusion of TypeScript files
  ],

  theme: {
    fontFamily: {
      'retro':['VT323','monospace']
    },  
    textShadow: {
      'green-shadow':[]
    },
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    }
  },
  plugins: [],
}

  