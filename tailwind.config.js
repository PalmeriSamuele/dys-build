// tailwind.config.js
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust paths to your source files
  ],
  theme: {
    extend: {
      fontFamily: {
        calibri: ['Calibri', 'sans-serif'],
        sitka: ['"Sitka Display"', 'serif'],
        comicsans: ['"Comic Sans MS"', 'cursive'],
      },
    },
  },
  safelist: [
    // Safelisting text-[10px] to text-[59px] (total 50 classes)
    ...Array.from({ length: 50 }, (_, i) => `text-[${10 + i}px]`),

    // Safelisting tracking classes
    ...Array.from({ length: 50 }, (_, i) => `tracking-[${i}px]`),

    // Color classes
    'bg-yellow-300',
    'bg-blue-300',
    'bg-green-400',
    'bg-gray-100',
    'bg-black',
    'bg-white',
    'text-black',
    'text-white',
    'border-b',
    'border-black'
  ],
  plugins: [],
}
