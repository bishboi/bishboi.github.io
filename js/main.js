
window.onscroll = function() {myFunction()};

function myFunction() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    
    if (window.pageYOffset > sticky)
    {
    navbar.classList.add("sticky")
    } 
    else {
    navbar.classList.remove("sticky");
    }
}
$(document).ready(function() {
function hidePreloader() {
    //Preloader
    preloaderFadeOutTime = 1000;
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});
