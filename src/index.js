import './style.css';
import { buildHomepage } from './homepage.js';

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

buildHomepage();