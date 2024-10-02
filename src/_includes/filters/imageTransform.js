const Imager = require('@11ty/eleventy-img');
const path = require('path');
const fs = require('fs');



module.exports = function imageTransform(src, config = {}) {
    if (!src) {
        return '';
    }

    // Check if image actually exists at the src path
    src = path.join('./src', src);
    if (!fs.existsSync(src)) {
        return '';
    }

    let defaultConfig = {
        widths: [null],
        formats: ['jpeg'],
        outputDir: './build/media/',
        urlPath: '/media/',
    };
    config = Object.assign(defaultConfig, config);
    config.filenameFormat = function (id, src, width, format, options) {
        const extension = path.extname(src);
        const name = path.basename(src, extension);

        return `${name}-${id}-${width}.${format}`;
    };

    Imager(src, config);
    let imageTransformList = Imager.statsSync(src, config);

    return imageTransformList;
};
