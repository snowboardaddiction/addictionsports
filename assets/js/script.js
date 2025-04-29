document.addEventListener("DOMContentLoaded", function () {
    console.log("Landing page loaded!");

    // Set --vh CSS variable for mobile viewport height fix
    function setRealVh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setRealVh();
    window.addEventListener('resize', setRealVh);
    window.addEventListener('orientationchange', setRealVh);
});
