import { getItems } from './items.js';

export { buildHomepage, animateSlides };

function buildHomepage() {
  const main = document.querySelector('.main');
  main.childNodes.forEach(child => child.remove());

  const slideContainer = document.createElement('div');
  slideContainer.className = 'slide-container';
  slideContainer.id = 'slide-container';
  appendSlides(slideContainer);

  const prevBtn = document.createElement('button');
  prevBtn.className = 'slide-arrow';
  prevBtn.id = 'slide-arrow-prev';
  prevBtn.innerHTML = '&#8249;';
  prevBtn.addEventListener('click', () => scrollSlide('left'));

  const nextBtn = document.createElement('button');
  nextBtn.className = 'slide-arrow';
  nextBtn.id = 'slide-arrow-next';
  nextBtn.innerHTML = '&#8250;';
  nextBtn.addEventListener('click', () => scrollSlide('right'));
  
  const home = document.createElement('div');
  home.className = 'home';
  home.append(prevBtn, nextBtn, slideContainer);

  main.append(home);
}

function animateSlides() {
  const items = getItems();
  let count = 1;

  setInterval(() => {
    const home = document.querySelector('.home');
    if (home) {
      if (count < items.length) {
        scrollSlide('right');
        count = count + 1;
      } else {
        resetSlides();
        count = 1;
      }
    } else {
      count = 1;
    }
  }, 8000);
}

function scrollSlide(direction) {
  const slideContainer = document.getElementById('slide-container');
  const slide = document.querySelector('.slide');
  const slideWidth = slide.clientWidth;
  if (direction === 'right') {
    slideContainer.scrollLeft += slideWidth
  } else if (direction === 'left') {
    slideContainer.scrollLeft -= slideWidth
  };
}

function resetSlides() {
  const slideContainer = document.getElementById('slide-container');
  const slide = document.querySelector('.slide');
  const slideCount = slideContainer.childNodes.length;
  const slideWidth = slide.clientWidth * slideCount;
  slideContainer.scrollLeft -= slideWidth;
}

function appendSlides(container) {
  const items = getItems();
  
  items.forEach((item) => {
    const slide = buildSlide(item);
    container.append(slide);
  });
}

function buildSlide(item) {
  const termElement = document.createElement('h1');
  termElement.className = 'term';
  termElement.textContent = item.name;

  const descElement = document.createElement('p');
  descElement.className = 'description';
  descElement.textContent = item.definition;

  const defElement = document.createElement('div');
  defElement.className = 'definition';
  defElement.append(termElement, descElement);

  const slideElement = document.createElement('div');
  slideElement.className = 'slide';
  slideElement.append(defElement);

  return slideElement;
}