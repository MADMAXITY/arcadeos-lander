import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#1E1E1E',
          secondary: '#2A2A2A',
          tertiary: '#333333',
          darker: '#1A1A1A',
        },
        accent: {
          green: '#39FF14',
          gold: '#FFD700',
          blue: '#00BFFF',
          orange: '#FF4500',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#D3D3D3',
          tertiary: '#999999',
          muted: '#666666',
        },
      },
      fontFamily: {
        rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
