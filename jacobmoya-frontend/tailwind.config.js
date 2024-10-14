/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],

  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Note the inclusion of TypeScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

 