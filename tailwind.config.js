/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-green': '#0F7800',
        'dark-green-deep': '#0a5500',
        'lime-brand': '#78FF00',
        'accent-green': '#A5FF0F',
        'brown-brand': '#784B1E',
        'cream': '#faf9f4',
        'warm-white': '#fdfcf7',
        'soft-gray': '#f0ede4',
        'text-dark': '#1a1f1a',
        'text-medium': '#4a524a',
        'text-light': '#7a847a',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
};
