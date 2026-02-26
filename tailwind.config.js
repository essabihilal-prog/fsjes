/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0C4A8A',
          blueLight: '#2563A9',
          palm: '#B9743A',
          palmLight: '#CF8B50',
          neutral: '#F5F7FA',
          ink: '#1E293B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'Noto Sans Arabic', 'sans-serif']
      },
      boxShadow: {
        soft: '0 8px 30px rgba(12, 74, 138, 0.08)'
      }
    }
  },
  plugins: []
};
