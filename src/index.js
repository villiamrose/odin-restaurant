import './style.css';
import { buildHomepage, animateSlides } from './homepage.js';
import { buildMenu } from './menu.js';
import { buildAbout } from './about.js';

function initializeNav() {
  const home = document.querySelector('.home-nav');
  const menu = document.querySelector('.menu-nav');
  const about = document.querySelector('.about-nav');

  home.addEventListener('click', () => {
    clearSelectedNav();
    home.ariaSelected = true;
    buildHomepage();
  });
  menu.addEventListener('click', () => {
    clearSelectedNav();
    menu.ariaSelected = true;
    buildMenu();
  });
  about.addEventListener('click', () => {
    clearSelectedNav();
    about.ariaSelected = true;
    buildAbout();
  })
}

function clearSelectedNav() {
  const currentSelected = document.querySelector('.nav [aria-selected="true"]');
  currentSelected.ariaSelected = false;
}

initializeNav();
buildHomepage();
animateSlides();