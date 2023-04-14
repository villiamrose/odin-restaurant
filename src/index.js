import './style.css';
import { buildHomepage, animateSlides } from './homepage.js';
import { buildMenu } from './menu.js';

function initializeNav() {
  const home = document.querySelector('.home-nav');
  const menu = document.querySelector('.menu-nav');

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
}

function clearSelectedNav() {
  const currentSelected = document.querySelector('.nav [aria-selected="true"]');
  currentSelected.ariaSelected = false;
}

// initializeNav();
// buildHomepage();
// animateSlides();