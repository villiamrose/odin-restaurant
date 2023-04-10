import './style.css';
import { buildHomepage } from './homepage.js';
import { buildMenu } from './menu.js';


function homepageHandler() {
  const slideContainer = document.getElementById("slide-container");
  const slide = document.querySelector(".slide");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");

  function scrollRight() {
    const slideWidth = slide.clientWidth;
    slideContainer.scrollLeft += slideWidth;
  }

  function scrollLeft() {
    const slideWidth = slide.clientWidth;
    slideContainer.scrollLeft -= slideWidth;
  }

  function scrollBack() {
    const slideCount = slideContainer.childNodes.length;
    const slideWidth = slide.clientWidth * slideCount;
    slideContainer.scrollLeft -= slideWidth;
  }

  nextButton.addEventListener("click", scrollRight);
  prevButton.addEventListener("click", scrollLeft);

  let count = 1;

  setInterval(() => {
    if(count < 3) {
      scrollRight();
      count++;
    } else {
      scrollBack();
      count = 1;
    }
  }, 10000);
}

const home = document.querySelector('.home-nav');
const menu = document.querySelector('.menu-nav');

home.addEventListener("click", () => {
  const currentSelected = document.querySelector('.nav [aria-selected="true"]');
  currentSelected.ariaSelected = false;

  home.ariaSelected = true;
  
  buildHomepage();
});
menu.addEventListener("click", () => {
  const currentSelected = document.querySelector('.nav [aria-selected="true"]');
  currentSelected.ariaSelected = false;
  
  menu.ariaSelected = true;

  buildMenu();
})

buildHomepage();