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

        extend: {
            spacing: {
                gutter: '1.111111rem',
                '1/6': '16.666666%',
                'info-col': 'calc(50% - (1.111111rem/2))',
            },
        },
    },
    plugins: [],
};
