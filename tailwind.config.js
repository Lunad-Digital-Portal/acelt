/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      fontWeight: {
        thin: 100, 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        slideUp: "slideUp 1.5s ease-out",
        scroll: 'scroll 30s linear infinite',
        slideRibbon: 'slideRibbon 30s linear infinite',
        slideIn: 'slideIn 0.3s ease-out',
        slideOut: 'slideOut 0.3s ease-in',
        countup: 'countup 5s ease-in-out',

      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-90%)' },
        },
        slideRibbon: {
          '0%': { transform: 'translateX(100%)'},
          '100%' :{transform: 'translateX(-100%)'},
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' }, 
          '100%': { transform: 'translateX(0)' }, 
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },    
          '100%': { transform: 'translateX(100%)' }, 
        },
        countup: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'smooth-ease': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
    },
  },
  plugins: [],
};
