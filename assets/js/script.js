// ============= Navbar sactive =============== //
// Get the current page URL
var currentPage = window.location.pathname;

// Get all the navigation links
var navLinks = document.querySelectorAll('.navbar-nav a.nav-link');

// Loop through the links and add the 'active' class if the href matches the current page
navLinks.forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});