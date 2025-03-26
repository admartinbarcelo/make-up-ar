/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
          serif: ['Cormorant Garamond', 'serif'],
        },
        colors: {
          primary: {
            50: '#fdf4f7',
            100: '#fbe8ef',
            200: '#f9d1df',
            300: '#f4aac4',
            400: '#ed7aa0',
            500: '#e34f7f',
            600: '#d12e5d',
            700: '#b01e47',
            800: '#931c3d',
            900: '#7c1c37',
          },
          secondary: {
            50: '#f5f7fa',
            100: '#ebeef3',
            200: '#d2dae7',
            300: '#adbcd2',
            400: '#8097b9',
            500: '#6379a1',
            600: '#4f6286',
            700: '#40506d',
            800: '#36445b',
            900: '#303b4d',
          },
          neutral: {
            50: '#f8f8f8',
            100: '#f0f0f0',
            200: '#e4e4e4',
            300: '#d1d1d1',
            400: '#b4b4b4',
            500: '#9a9a9a',
            600: '#818181',
            700: '#6a6a6a',
            800: '#5a5a5a',
            900: '#4e4e4e',
          },
        },
      },
    },
    plugins: [],
  }