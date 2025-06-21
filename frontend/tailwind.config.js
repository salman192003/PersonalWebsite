/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                secondary: '#ffffff',
                text: {
                    primary: '#000000',
                    secondary: '#ffffff',
                },
                background: {
                    primary: '#ffffff',
                    secondary: '#000000',
                },
                nothing: {
                    red: '#FF0000',
                    black: '#000000',
                    grey: '#1A1A1A',
                    orange: '#FF6B00',
                    'light-grey': '#333333',
                },
                cyber: {
                    black: '#0a0a0a',
                    dark: '#1a1a1a',
                    grey: '#2a2a2a',
                    light: '#3a3a3a',
                },
                neon: {
                    blue: '#00f3ff',
                    purple: '#9d00ff',
                    pink: '#ff00ff',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                'orbitron': ['Orbitron', 'sans-serif'],
                'space-grotesk': ['Space Grotesk', 'sans-serif'],
            },
            spacing: {
                '128': '32rem',
            },
            borderWidth: {
                '1': '1px',
            },
            animation: {
                'glow-pulse': 'glowPulse 2s infinite',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'border-glow': 'borderGlow 3s linear infinite',
                'grid-move': 'gridMove 20s linear infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                glowPulse: {
                    '0%, 100%': { boxShadow: '0 0 5px rgba(255, 0, 0, 0.2)' },
                    '50%': { boxShadow: '0 0 20px rgba(255, 0, 0, 0.4)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                borderGlow: {
                    '0%, 100%': { backgroundPosition: '0 0' },
                    '50%': { backgroundPosition: '400% 0' },
                },
                gridMove: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(30px)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'neon-blue': '0 0 5px #00f3ff, 0 0 20px #00f3ff',
                'neon-purple': '0 0 5px #9d00ff, 0 0 20px #9d00ff',
                'neon-pink': '0 0 5px #ff00ff, 0 0 20px #ff00ff',
            },
        },
    },
    plugins: [],
} 