/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'gray-top': 'linear-gradient(to bottom, #f3f4f6, #9ca3af)',
      'gray-left': 'linear-gradient(to right, #d1d5db, #6b7280)',
      'gray-dark': 'linear-gradient(to bottom right, #4b5563, #1f2937)',
    }},
  },
  plugins: [require("daisyui")],
}

