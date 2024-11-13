/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    animation: {
      'fade-in': 'fade 0.3s ease-in-out forwards',
      'fade-out': 'fade 0.3s ease-in-out forwards reverse',
      'slide-in-left': 'slide 0.3s ease-in-out forwards',
      'slide-out-right': 'slide 0.3s ease-in-out forwards reverse',
    },
    keyframes: {
      fade: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      slide: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
    },
    extend: {
      screens: {
        sm: '600px',
      },
    },
  },
  plugins: [],
};
