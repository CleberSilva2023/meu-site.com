//JavaScript principal do site

//Hambuguer
function toggleMenu() {
    var nav = document.querySelector('.nav');
    if (nav.style.display == "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}