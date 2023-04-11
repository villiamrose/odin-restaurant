import { getItems } from './items.js';

export { buildHomepage };

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
  prevBtn.innerHTML = "&#8249;";

  const nextBtn = document.createElement('button');
  nextBtn.className = 'slide-arrow';
  nextBtn.id = 'slide-arrow-next';
  nextBtn.innerHTML = "&#8250;";
  
  const home = document.createElement('div');
  home.className = 'home';
  home.append(prevBtn, nextBtn, slideContainer);

  main.append(home);
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