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
    }).mount();
})();
