module.exports = function (config) {
    // Set output paths
    config.addPassthroughCopy('src/media');

    return {
      dir: {
        input: 'src',
        output: 'build',
      },
      dataTemplateEngine: 'njk',
      templateFormats: ['njk'],
    };
};
