
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
$(window).on('load',function() {
    // Animate loader off screen
    $(".spinner-wrapper").fadeOut("slow");;
});