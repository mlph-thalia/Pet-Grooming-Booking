/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#8DC71E',
        'gray-md': '#929090',
        'disabled-gray': '#8e99a3',
        'dark-gray': '#333333',
        'menu-gray': '#495057',
        'menu-green': '#37a487',
        'primary-blue': '#2c7be5',
        'secondary-blue': '#91caf',
        'menu-white': '#ffffff',
        'footer-color': '#eee7da',
        'primary-violet': '#c0b3e7',
      },
      fontSize: {
        'title-head': ['24px', { fontWeight: '700', lineHeight: 'normal' }],
        'sub-head': ['22px', { fontWeight: '700', lineHeight: 'normal' }],
        'title-menu': ['20px', { fontWeight: '700', lineHeight: 'normal' }],
        'normal-bold': ['16px', { fontWeight: '700', lineHeight: 'normal' }],
        'normal-title': ['14px', { fontWeight: '700', lineHeight: 'normal' }],
        'normal-md': ['16px', { fontWeight: '400', lineHeight: 'normal' }],
        'normal-sm': ['14px', { fontWeight: '400', lineHeight: 'normal' }],
      },
    },
  },
  plugins: [],
}
