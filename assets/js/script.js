const navButton = document.querySelector("#navButton");
let navHeader = document.querySelector("#navHeader");

navButton.addEventListener("click", function () {
    if (navHeader.style.display == "block") {
        navHeader.style.display = "none";
    } else {
        navHeader.style.display = "block";
    }
});




// MEDIA SCREEN > 600PX
function redimensionnement() {
    var result = document.getElementById('result');
    if ("matchMedia" in window) { // Détection
        if (window.matchMedia("(min-width:778px)").matches) {
            navHeader.style.display = "flex";
        } else {
            navHeader.style.display = "none";
        }
    }
}

window.addEventListener('resize', redimensionnement, false);