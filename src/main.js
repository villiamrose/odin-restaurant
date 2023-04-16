import { buildHomepage } from './homepage.js';
import { buildMenu } from './menu.js';
import { buildAbout } from './about.js';

export { buildMain };

let isMainNotYetBuilt = true;

function buildMain() {
  if (isMainNotYetBuilt) {
    const homeNav = document.createElement('li');
    homeNav.className = 'home-nav';
    homeNav.textContent = 'Home';
    homeNav.ariaSelected = 'true';

    const menuNav = document.createElement('li');
    menuNav.className = 'menu-nav';
    menuNav.textContent = 'Menu';

    const aboutNav = document.createElement('li');
    aboutNav.className = 'about-nav';
    aboutNav.textContent = 'About';

    const nav = document.createElement('ul');
    nav.className = 'nav';
    nav.append(homeNav, menuNav, aboutNav);

    const logo = document.createElement('p');
    logo.className = 'logo';
    logo.textContent = 'Yang′s';

    const header = document.createElement('div');
    header.className = 'header';
    header.append(logo, nav);

    const main = document.createElement('div');
    main.className = 'main';

    const content = document.querySelector('#content');
    content.append(header, main);

    addEventListeners();
    buildHomepage();

    isMainNotYetBuilt = false;
  }
}

function addEventListeners() {
  const home = document.querySelector('.home-nav');
  const menu = document.querySelector('.menu-nav');
  const about = document.querySelector('.about-nav');
  
  home.addEventListener('click', () => {
    selectNav(home);
    buildHomepage();
  });
  menu.addEventListener('click', () => {
    selectNav(menu);
    buildMenu();
  });
  about.addEventListener('click', () => {
    selectNav(about);
    buildAbout();
  })
}

function selectNav(nav) {
  const selectedNav = document.querySelector('.nav [aria-selected="true"]');
  selectedNav.ariaSelected = false;
  nav.ariaSelected = true;
}