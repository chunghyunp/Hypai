/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#eef4ff',
          100: '#dae6ff',
          200: '#bdd4ff',
          300: '#90b8ff',
          400: '#5b91ff',
          500: '#3b6ff8',
          600: '#2550ed',
          700: '#1d3dda',
          800: '#1e34b0',
          900: '#1e308b',
          950: '#161f54',
        },
        surface: {
          0:   '#0a0e1a',
          50:  '#0f1320',
          100: '#151a2e',
          200: '#1c2340',
          300: '#252e4a',
          400: '#363f5c',
        },
        accent: {
          blue:    '#5b91ff',
          violet:  '#8b7cf6',
          emerald: '#34d399',
          cyan:    '#22d3ee',
          amber:   '#fbbf24',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};
