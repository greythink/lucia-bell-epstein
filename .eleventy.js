const imageTransformFilter = require('./src/_includes/filters/imageTransform.js');
const imageTxToSrcsetFilter = require('./src/_includes/filters/imageTxToSrcset.js');



module.exports = function (config) {
    // Set output paths
    config.addPassthroughCopy('src/media');
    config.addPassthroughCopy('src/assets/js');
    config.addPassthroughCopy('src/assets/icons');
    config.addPassthroughCopy('src/robots.txt');

    // Copy library files
    config.addPassthroughCopy({
        'node_modules/@splidejs/splide/dist/js/splide.min.js': 'assets/js/libs/splide.min.js',
        'node_modules/lazysizes/lazysizes.min.js': 'assets/js/libs/lazysizes.min.js',
    });

    // Custom template filters
    config.addFilter('imageTransform', imageTransformFilter);
    config.addFilter('imageTxToSrcset', imageTxToSrcsetFilter);

    return {
      dir: {
        input: 'src',
        output: 'build',
      },
      dataTemplateEngine: 'njk',
      templateFormats: ['njk'],
    };
};
