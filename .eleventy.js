module.exports = function (config) {
    return {
      dir: {
        input: 'src',
        output: 'public',
      },
      dataTemplateEngine: 'njk',
      templateFormats: ['njk'],
    };
};
