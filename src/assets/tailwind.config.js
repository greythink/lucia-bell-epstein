/** @type {import('tailwindcss').Config} */



const defaultTheme = require('tailwindcss/defaultTheme');



module.exports = {
    content: [
        './src/**/*.njk',
    ],
    safelist: [],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000000',
        },
        fontFamily: {
            body: ['"Courier Prime"'].concat(defaultTheme.fontFamily.mono),
        },
        screens: {
            'xs': '540px',
            'sm': '768px',
            'md': '1024px',
            'lg': '1280px',
            'xl': '1536px',
        },

        extend: {
            spacing: {
                gutter: '1.111111rem',
                '1/6': '16.666666%',
            },
            maxWidth: ({ theme }) => ({
                ...theme('size'),
                '5/4': '125%',
            }),
        },
    },
    plugins: [],
};
