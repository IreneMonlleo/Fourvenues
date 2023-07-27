/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'basic-blue': '#0081f0',
      'dark-blue': '#31394c',
      'bg-light': '#fafafa',
      'light-grey':'#f8f8f8',
      'gray': '#d7d7d7',
      'text-grey':'#777777',
      'grey-blue': '#697082',
      'purple': '#9d57b7',
      'white': '#ffffff',
      'green': '#77b697',
      'red': '#b4504c',
      /**Dask mode colors */
      'd-light-blue':'#31394c',
      'bg-dark':'#212735', 
      'd-grey':'#5f636e'
    },
    extend: {},
  },
  plugins: [],
}

