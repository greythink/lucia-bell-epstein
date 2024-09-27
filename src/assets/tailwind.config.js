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

        extend: {},
    },
    plugins: [],
};
