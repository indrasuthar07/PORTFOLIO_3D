
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%, 10%, 15%, 30%, 35%, 50%, 70%, 90%, 95%': { width: '0' },
          '5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85%': { width: 'calc(100% + 8px)' },
        },
        cursor: {
          '0%, 100%': { borderLeftColor: 'transparent' },
          '50%': { borderLeftColor: 'currentColor' },
        },
        words: {
          '0%, 20%': { transform: 'translateY(0)' },
          '21%, 40%': { transform: 'translateY(-100%)' },
          '41%, 60%': { transform: 'translateY(-200%)' },
          '61%, 80%': { transform: 'translateY(-300%)' },
          '81%, 100%': { transform: 'translateY(-400%)' },
        },
      },
      animation: {
        typing: 'typing 20s steps(14) infinite',
        cursor: 'cursor 4s infinite',
        
      },
    },
  },
  plugins: [],
};
