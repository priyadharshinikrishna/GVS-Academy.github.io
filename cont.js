/*Navbar section*/
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// whatsapp message sending
function sendWhatsAppMessage(event) {
    event.preventDefault();


    let phoneNumber = "918015894032"; 
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields!");
        return;
    }

    let whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Here is my message: ${message}`;
    let encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");

    resetFields();
}

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