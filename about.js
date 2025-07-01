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

/*Stats section*/
document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".counter");
    let speed = 200; // Adjust speed

    counters.forEach(counter => {
        let updateCount = () => {
            let target = +counter.innerText.replace(",", "");
            let count = 0;
            let increment = target / speed;

            let interval = setInterval(() => {
                count += increment;
                if (count >= target) {
                    counter.innerText = target.toLocaleString(); // Format with commas
                    clearInterval(interval);
                } else {
                    counter.innerText = Math.floor(count).toLocaleString();
                }
            }, 10);
        };

        updateCount();
    });
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

/*Review*/
var myCarousel = document.querySelector('#testimonialCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 3000, // Change slide every 3 seconds
        pause: 'hover'  // Pause when user hovers over
    });



