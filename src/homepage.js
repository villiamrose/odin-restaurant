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
  const definitions = [
    {
      term: "Kare-kare",
      description: "Kare-kare is a Philippine stew that features a thick savory peanut sauce. It is generally made from a base of stewed oxtail, beef tripe, pork hocks, calves' feet, pig's feet or trotters, various cuts of pork, beef stew meat, and occasionally offal."
    },{
      term: "Sinigang",
      description: "Sinigang is a Filipino soup or stew characterized by its sour and savory taste. It is most often associated with tamarind, although it can use other sour fruits and leaves as the souring agent. It is one of the more popular dishes in Filipino cuisine."
    },{
      term: "Adobo",
      description: "Adobo is a popular Filipino dish that involves meat, seafood, or vegetables marinated in vinegar, soy sauce, garlic, bay leaves, and black peppercorns, which is browned in oil, and simmered in the marinade."
    }
  ];
  
  definitions.forEach((definition) => {
    const slide = buildSlide(definition);
    container.append(slide);
  });
}

function buildSlide(definition) {
  const termElement = document.createElement('h1');
  termElement.className = 'term';
  termElement.textContent = definition.term;

  const descElement = document.createElement('p');
  descElement.className = 'description';
  descElement.textContent = definition.description;

  const defElement = document.createElement('div');
  defElement.className = 'definition';
  defElement.append(termElement, descElement);

  const slideElement = document.createElement('div');
  slideElement.className = 'slide';
  slideElement.append(defElement);

  return slideElement;
}