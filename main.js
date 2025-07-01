/*Navbar section*/
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
 
/*About section*/
window.onload = function () {
    let elements = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        elements.forEach(element => {
            let position = element.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (position < windowHeight - 100) {
                element.classList.add("show");
            }
        });
    }

    // Ensure all fade-in elements are visible on load
    elements.forEach(el => el.classList.add("show"));

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Check on load
};

 /*Card section*/   
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        function selectCard(element) {
            document.querySelectorAll('.feature-box').forEach(card => {
                card.classList.remove('selected');
            });
            element.classList.add('selected');
        }