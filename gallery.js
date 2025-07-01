/*Navbar section*/
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Scroll Animation Effect
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        fadeElements.forEach(el => {
            let position = el.getBoundingClientRect().top;
            let screenPosition = window.innerHeight - 100;

            if (position < screenPosition) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run once on page load
});

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function selectCard(element) {
        document.querySelectorAll('.feature-box').forEach(card => {
            card.classList.remove('selected');
        });
        element.classList.add('selected');
    }

