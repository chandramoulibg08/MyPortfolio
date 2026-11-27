// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("show");
});

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll("#navLinks a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("show");
    });
});

// ANIMATED TYPING EFFECT
const words = [
    "CSE Student",
    "Programmer",
    "Web Developer",
    "Tech Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typing = document.getElementById("typing");
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typing.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const myEmail = "YOUR_EMAIL@example.com";

    if (!name || !email || !message) {
        document.getElementById("status").textContent =
            "Please fill in all fields.";
        return;
    }

    const subject = encodeURIComponent("Portfolio message from " + name);

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );

    document.getElementById("status").textContent =
        "Opening your email application...";

    window.location.href =
        "mailto:" + myEmail +
        "?subject=" + subject +
        "&body=" + body;
});