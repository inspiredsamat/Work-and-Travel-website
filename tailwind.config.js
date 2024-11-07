/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    ".src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "var(--color-red)",
        dark: "var(--color-dark)",
        white: "var(--color-white)"
      },
    },
    screens: {
      '2xl': '1512px',
      'xl': '1200px',
      'lg': '960px',
      'md': '768px',
      'sm': '640px',
      'xs': '480px',
    },
    container: {
      center: true,
      padding: {
        "2xl": "50px",
        "xl": "40px",
        "lg": "30px",
        "md": "20px",
        "sm": "10px",
        "xs": "10px",
      }
    }
  },
  plugins: [],
};
