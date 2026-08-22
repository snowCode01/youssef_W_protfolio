/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#050505',
        darkBrown: '#2B1D17',
        mediumBrown: '#533C2A',
        cream: '#E8DEC9',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        '3d': '0 20px 50px rgba(0, 0, 0, 0.8), 0 10px 20px rgba(43, 29, 23, 0.4)',
        '3d-hover': '0 30px 60px rgba(0, 0, 0, 0.9), 0 15px 30px rgba(232, 222, 201, 0.2)',
        'glow-cream': '0 0 25px rgba(232, 222, 201, 0.35)',
        'glow-brown': '0 0 25px rgba(83, 60, 42, 0.5)',
        'ring-inner': 'inset 0 4px 10px rgba(0, 0, 0, 0.6), 0 0 15px rgba(232, 222, 201, 0.2)',
      },
      animation: {
        'orbit-1': 'orbit1 12s linear infinite',
        'orbit-2': 'orbit2 18s linear infinite reverse',
        'orbit-3': 'orbit3 24s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        orbit1: {
          '0%': { transform: 'rotate(0deg) rotateX(65deg) rotateY(15deg)' },
          '100%': { transform: 'rotate(360deg) rotateX(65deg) rotateY(15deg)' },
        },
        orbit2: {
          '0%': { transform: 'rotate(0deg) rotateX(45deg) rotateY(-25deg)' },
          '100%': { transform: 'rotate(360deg) rotateX(45deg) rotateY(-25deg)' },
        },
        orbit3: {
          '0%': { transform: 'rotate(0deg) rotateX(75deg) rotateY(35deg)' },
          '100%': { transform: 'rotate(360deg) rotateX(75deg) rotateY(35deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 8px rgba(232, 222, 201, 0.5))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 20px rgba(232, 222, 201, 0.9))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        }
      }
    },
  },
  plugins: [],
}
