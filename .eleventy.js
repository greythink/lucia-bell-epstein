module.exports = function (config) {
    return {
      dir: {
        input: 'src',
        output: 'build',
      },
      dataTemplateEngine: 'njk',
      templateFormats: ['njk'],
    };
};
