document.write(
    '<div class="container">' +
    '<div id="top">' +
    '<div id="header-title">' +
    '<a href="accueil.html"><h1 id="header-title-name"></h1></a>' +
    '</div>' +
    '<div id="header-logo">' +
    '<a href="accueil.html"><img src="../img/logo.png" id="header-logo-id"></a>' +
    '</div>' +
    '</div>' +

    '</div>' +
    '<nav id="bas">' +
    '<ul>' +
    '<li onclick="openNav()"><img src="../img/navBar.png"></li>' +
    '</ul>' +
    '</nav>' +
    '<div class="table">' +
    '<div class="pizza no-select">' +
    '<div class="slice sliceOk slice1" onclick="changePage(`accueil`)"><p>Accueil</p></div>' +
    '<div class="slice sliceOk slice2" onclick="changePage(`info`)"><p>À propos</p></div>' +
    '<div class="slice sliceOk slice3" onclick="changePage(`menu`)"><p>Menu</p></div>' +
    '<div class="slice sliceOk slice4" onclick="changePage(`contact`)"><p>Contact</p></div>' +
    '<div class="slice slice5"><p></p></div>' +
    '<div class="slice slice6"><p></p></div>' +
    '<div class="slice slice7"><p></p></div>' +
    '<div class="slice slice8"><p></p></div>' +
    '</div>' +
    '</div>'
);

var navIsOpen = false;

function openNav() {
    const tableElement = document.querySelector('.table');

    if (!navIsOpen) {
        tableElement.style.display = 'flex';
        setTimeout(() => {
            navIsOpen = !navIsOpen;
        }, 100);
    };
};

function pageClicked() {
    const tableElement = document.querySelector('.table');

    if (navIsOpen) {
        setTimeout(() => {
            tableElement.style.display = 'none';
            navIsOpen = !navIsOpen;
        }, 100);

    };
};

window.addEventListener('click', pageClicked);

function changeHeader() {
    document.querySelector('header').style.top = "-" + (document.getElementById("bas").offsetTop - 50) + "px";
};

window.addEventListener('resize', changeHeader);

document.addEventListener('DOMContentLoaded', function () {
    changeHeader();
});


var logoIsOn = true;

function checkScroll() {

    var logoElement = document.getElementById("header-logo-id");
    const tableElement = document.querySelector('.table');

    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    tableElement.style.transform = 'rotate(' + (-scrollPosition / 60) + 'deg)';
    if (scrollPosition >= 90) {
        logoIsOn = false;
        logoElement.style.visibility = "hidden";
    } else {
        if (!logoIsOn) {
            logoElement.style.visibility = "visible";
        };
        logoIsOn = true;
    };
};

window.addEventListener('scroll', checkScroll);

function changePage(page) {
    //window.location = page + ".html";
    window.location = "accueil.html#"+page;
};
