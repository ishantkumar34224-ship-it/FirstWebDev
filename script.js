// ===============================
// SMOOTH ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// NAVBAR BACKGROUND
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(10,10,10,.75)";
        navbar.style.borderRadius = "18px";
        navbar.style.padding = "18px 30px";
        navbar.style.border = "1px solid rgba(255,255,255,.08)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "transparent";
        navbar.style.border = "none";
        navbar.style.boxShadow = "none";
        navbar.style.padding = "22px 0";
    }

});


// ===============================
// REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".about-card, .service-card, .contact-box"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(60px)";
    item.style.transition = "all .8s ease";

    observer.observe(item);

});


// ===============================
// HERO TEXT ANIMATION
// ===============================

window.addEventListener("load", () => {

    const heroTitle = document.querySelector(".hero h1");
    const heroText = document.querySelector(".hero p");
    const heroButtons = document.querySelector(".hero-buttons");
    const profile = document.querySelector(".profile-card");

    heroTitle.style.opacity = "0";
    heroText.style.opacity = "0";
    heroButtons.style.opacity = "0";
    profile.style.opacity = "0";

    heroTitle.style.transform = "translateY(40px)";
    heroText.style.transform = "translateY(40px)";
    heroButtons.style.transform = "translateY(40px)";
    profile.style.transform = "translateY(40px)";

    setTimeout(() => {

        heroTitle.style.transition = ".8s";
        heroTitle.style.opacity = "1";
        heroTitle.style.transform = "translateY(0)";

    }, 200);

    setTimeout(() => {

        heroText.style.transition = ".8s";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";

    }, 450);

    setTimeout(() => {

        heroButtons.style.transition = ".8s";
        heroButtons.style.opacity = "1";
        heroButtons.style.transform = "translateY(0)";

    }, 700);

    setTimeout(() => {

        profile.style.transition = "1s";
        profile.style.opacity = "1";
        profile.style.transform = "translateY(0)";

    }, 900);

});


// ===============================
// PARALLAX BACKGROUND
// ===============================

const blur1 = document.querySelector(".blur-1");
const blur2 = document.querySelector(".blur-2");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    blur1.style.transform = `translateY(${scroll * 0.2}px)`;
    blur2.style.transform = `translateY(-${scroll * 0.15}px)`;

});


// ===============================
// MOUSE GLOW EFFECT
// ===============================

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "350px";
glow.style.height = "350px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
"radial-gradient(circle, rgba(107,168,255,.18), transparent 70%)";
glow.style.filter = "blur(35px)";
glow.style.zIndex = "-1";

document.body.appendChild(glow);

window.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX - 175 + "px";
    glow.style.top = e.clientY - 175 + "px";

});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons = document.querySelectorAll(
".primary-btn,.secondary-btn,.nav-btn"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px) scale(1.02)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0) scale(1)";

    });

});


// ===============================
// PROFILE CARD TILT
// ===============================

const card = document.querySelector(".profile-card");

card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x - rect.width / 2) / 18;
    const rotateX = -(y - rect.height / 2) / 18;

    card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave", () => {

    card.style.transform = "rotateX(0) rotateY(0)";

});


// ===============================
// NUMBER OF YEARS
// ===============================

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

footer.innerHTML = `© ${year} Raju. All Rights Reserved.`;


// ===============================
// PREVENT IMAGE DRAG
// ===============================

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});


// ===============================
// SCROLL TO TOP ON LOGO CLICK
// ===============================

document.querySelector(".logo a").addEventListener("click", (e) => {

    e.preventDefault();

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});