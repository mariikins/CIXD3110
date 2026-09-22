/* -------------------------
   CUSTOM CURSOR
------------------------- */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(event) {

    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";

});


/* -------------------------
   IMAGE HOVER
------------------------- */

const images = document.querySelectorAll("img");

images.forEach(function(image) {

    image.addEventListener("mouseenter", function() {
        cursor.classList.add("large");
    });

    image.addEventListener("mouseleave", function() {
        cursor.classList.remove("large");
    });

});


/* -------------------------
   PARALLAX HERO IMAGE
------------------------- */

const heroImage = document.querySelector(".hero-image");

document.addEventListener("mousemove", function(event) {

    if (!heroImage) return;

    const x =
        (event.clientX / window.innerWidth - 0.5) * 2;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 2;

    heroImage.style.transform =
        `translate(${x * 12}px, ${y * 12}px)`;

});


/* -------------------------
   HERO TITLE MOVEMENT
------------------------- */

const heroTitle = document.querySelector(".hero-title");

window.addEventListener("scroll", function() {

    const scroll = window.scrollY;

    if (heroTitle) {

        heroTitle.style.transform =
            `translateX(${scroll * 0.04}px)`;

    }

});


/* -------------------------
   SCROLL REVEAL
------------------------- */

const cards = document.querySelectorAll(
    ".layer-card, .question"
);

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(function(card) {

    observer.observe(card);

});


/* -------------------------
   QUESTION INTERACTION
------------------------- */

const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {

    question.addEventListener("click", function() {

        question.classList.toggle("selected");

    });

});