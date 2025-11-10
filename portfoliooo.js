// Navbar Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

// Typed.js Initialization
var typed = new Typed(".typed-text", {
  strings: ["Sakshi", "a Web Developer", "a Designer", "a Creative Thinker"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
