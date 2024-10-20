/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Note the inclusion of TypeScript files
  ],
   extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  theme: {
    fontFamily: {
      'retro':['VT323','monospace']
    },  
    textShadow: {
      'green-shadow':[]
    }
  },
  plugins: [],
}

  