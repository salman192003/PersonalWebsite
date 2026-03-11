/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                ios: {
                    blue: '#007AFF',
                    green: '#34C759',
                    red: '#FF3B30',
                    orange: '#FF9500',
                    purple: '#AF52DE',
                    indigo: '#5856D6',
                    teal: '#5AC8FA',
                    gray: '#8E8E93',
                },
            },
            fontFamily: {
                sans: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'SF Pro Display',
                    'SF Pro Text',
                    'Inter',
                    'Helvetica Neue',
                    'sans-serif',
                ],
            },
            borderRadius: {
                'ios': '12px',
                'ios-lg': '14px',
            },
        },
    },
    plugins: [],
}