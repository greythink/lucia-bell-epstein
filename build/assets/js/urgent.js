// Calculate JS-assisted values
function calculateValues () {
    var vh = window.innerHeight * 0.01;
    // Create --vh CSS variable
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
calculateValues();
window.addEventListener('resize', calculateValues);
