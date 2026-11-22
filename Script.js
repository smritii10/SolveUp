/*=================================
        SOLVEUP WEBSITE
        script.js
=================================*/

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


/*=================================
        Sticky Navbar
=================================*/

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(255,255,255,0.95)";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    } else {

        navbar.style.background = "rgba(255,255,255,.75)";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.08)";

    }

});


/*=================================
        Reveal Animation
=================================*/

const reveals = document.querySelectorAll(
    ".card, .feature, .glass, .member, .stat, .priority-card, .tech-grid div"
);

function revealSections() {

    const windowHeight = window.innerHeight;

    reveals.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealSections);

revealSections();


/*=================================
        Animated Counter
=================================*/

const counters = document.querySelectorAll(".stat h1");

let started = false;

function startCounter() {

    if (started) return;

    const dashboard = document.querySelector("#dashboard");

    const top = dashboard.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counters.forEach(counter => {

            let text = counter.innerText;

            if (text.includes("/")) return;

            let target = parseInt(text.replace(/,/g, "").replace("%", ""));

            let count = 0;

            const increment = Math.ceil(target / 120);

            const timer = setInterval(() => {

                count += increment;

                if (count >= target) {

                    count = target;

                    clearInterval(timer);

                }

                if (text.includes("%")) {

                    counter.innerText = count + "%";

                }

                else {

                    counter.innerText = count.toLocaleString();

                }

            }, 20);

        });

        started = true;

    }

}

window.addEventListener("scroll", startCounter);

startCounter();


/*=================================
        Active Navigation
=================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=================================
        Contact Form
=================================*/

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("🎉 Thank you for contacting SolveUp!\n\nWe will get back to you soon.");

    form.reset();

});


/*=================================
        Scroll To Top Button
=================================*/

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "25px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background = "#0b3d91";
topButton.style.color = "white";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 8px 20px rgba(0,0,0,.3)";
topButton.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=================================
        Hero Image Animation
=================================*/

const heroImage = document.querySelector(".hero-image");

let angle = 0;

setInterval(() => {

    angle += 0.3;

    heroImage.style.transform =
        `translateY(${Math.sin(angle) * 10}px)`;

}, 30);


/*=================================
        Console Message
=================================*/

console.log(
    "%cWelcome to SolveUp 🚀",
    "color:#00b7ff;font-size:22px;font-weight:bold;"
);

console.log(
    "AI Powered Infrastructure Management"
);