module.exports = {
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: { config: 'src/assets/tailwind.config.js' },
        autoprefixer: {},
    },
};
