// Calculate JS-assisted values
(function () {
    var vh = window.innerHeight * 0.01;
    // Create --vh CSS variable
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})();



// Set up carousels
(function () {
    // Initialise carousel
    var homepageCarousel = new Splide('#home-image-carousel', {
        speed: 1000,
        type: 'loop',
        mediaQuery: 'min',
        pagination: false,
        keyboard: 'global',
        lazyload: 'nearby',
    }).mount();

    // Update slide count
    var slideIndexEl = document.getElementById('carousel-slide-index');
    var slideIndexStr = '01';
    homepageCarousel.on('move', function (newIndex) {
        try {
            slideIndexStr = String(newIndex + 1).padStart(2, 0);
        } catch (e) {
            slideIndexStr = String(newIndex + 1)
        } finally {
            slideIndexEl.textContent = slideIndexStr;
        }
    });
})();
