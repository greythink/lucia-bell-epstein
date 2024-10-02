module.exports = function imageTxtoSrcset(transform) {
    var transformList = transform.jpeg;

    if (!transformList) {
        return '';
    }

    var initialSrcset = '';
    var srcset = (transformList).reduce(
        function (accumulator, currentValue, currentIndex) {
            return accumulator + (currentIndex > 0 ? ', ' : '') + currentValue.srcset;
        },
        initialSrcset
    );

    return srcset;
};
