import 'regenerator-runtime';
import '../scss/style.scss';
import './resItem.js';

// Menu
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul'); 
const navLinks = document.querySelectorAll('.site-navbar a');


function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('close');
  navMenu.classList.toggle('open');
}

function navLinkClick() {
  if (navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

function allEventListners() {
  navToggler.addEventListener('click', togglerClick);
  navLinks.forEach((e) => e.addEventListener('click', navLinkClick));
}

allEventListners();