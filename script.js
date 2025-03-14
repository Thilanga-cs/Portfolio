const words = ["Full Stack Developer", "Frontend Developer", "Backend Developer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100; // Typing speed in ms
const delayBetweenWords = 2000; // Delay before deleting

function typeEffect() {
    const textElement = document.getElementById("changing-text");
    const currentWord = words[index];

    if (!isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex++);
    } else {
        textElement.textContent = currentWord.substring(0, charIndex--);
    }

    let typingSpeed = isDeleting ? speed / 2 : speed;

    if (!isDeleting && charIndex > currentWord.length) {
        setTimeout(() => (isDeleting = true), delayBetweenWords);
        typingSpeed = delayBetweenWords;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % words.length;
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
document.addEventListener("DOMContentLoaded", typeEffect);

//! ---------------------------------------------------------------------------------
// Start the typing effect
document.addEventListener("DOMContentLoaded", typeEffect);


document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) { // Check if elements exist
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };
    }
});
// !-------------------------------road map---------------------------------

document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    function revealTimeline() {
        timelineItems.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < window.innerHeight - 100) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealTimeline);
    revealTimeline(); // Initial check when page loads
});
