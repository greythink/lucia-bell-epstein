const imageTransformFilter = require('./src/_includes/filters/imageTransform.js');



module.exports = function (config) {
    // Set output paths
    config.addPassthroughCopy('src/media');
    config.addPassthroughCopy('src/assets/js');
    config.addPassthroughCopy('src/assets/icons');

    // Copy library files
    config.addPassthroughCopy({
        'node_modules/@splidejs/splide/dist/js/splide.min.js': 'assets/js/libs/splide.min.js'
    });

    // Custom template filters
    config.addFilter('imageTransform', imageTransformFilter);

    return {
      dir: {
        input: 'src',
        output: 'build',
      },
      dataTemplateEngine: 'njk',
      templateFormats: ['njk'],
    };
};
