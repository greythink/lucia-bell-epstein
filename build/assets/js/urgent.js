// Calculate JS-assisted values
window.addEventListener('resize', function () {
    var vh = window.innerHeight * 0.01;
    // Create --vh CSS variable
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});



// Initialise lazysizes
(function () {
    window.lazySizes.init();
})();
