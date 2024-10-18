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
  },
  plugins: [],
}

  