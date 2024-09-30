module.exports = function (config) {
    // Set output paths
    config.addPassthroughCopy('src/media');

    // Copy library files
    config.addPassthroughCopy({
        'node_modules/@splidejs/splide/dist/js/splide.min.js': 'assets/js/libs/splide.min.js'
    });

    return {
      dir: {
        input: 'src',
        output: 'build',
      },
      dataTemplateEngine: 'njk',
      templateFormats: ['njk'],
    };
};
