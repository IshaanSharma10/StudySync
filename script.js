document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector(".nav");
    const contactButton = document.querySelector(".contact-button");
    const startButton = document.querySelector(".start-button");
    const tourButton = document.querySelector(".tour-button");
    const aboutLink = document.querySelector(".nav-link:nth-child(2)");
    const contactLink = document.querySelector(".nav-link:nth-child(4)");
    const darkModeToggle = document.querySelector(".dark-mode-toggle");
    
    // Toggle mobile navigation
    menuButton.addEventListener("click", function() {
        nav.classList.toggle("show-nav");
    });

    // Contact button action
    contactButton.addEventListener("click", function() {
        alert("Contact us at: contact@mywebsite.com");
    });

    // Start button action
    startButton.addEventListener("click", function() {
        alert("Getting started!");
    });

    // Tour button action
    tourButton.addEventListener("click", function() {
        alert("Starting tour!");
    });

    // Scroll to About section
    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });

    // Scroll to Contact section
    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
    
    // Dark mode toggle
    darkModeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });

    // Lazy load images
    const lazyImages = document.querySelectorAll("img[data-src]");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
            }
        });
    });

    lazyImages.forEach(img => {
        observer.observe(img);
    });
});
