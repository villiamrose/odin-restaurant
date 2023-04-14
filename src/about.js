export { buildAbout };

function buildAbout() {
  const main = document.querySelector('.main');
  main.childNodes.forEach(child => child.remove());

  const country = document.createElement('span');
  country.className = 'country';
  country.textContent = 'Philippines';

  const about = document.createElement('p');
  about.className = 'about';
  about.textContent = 'Made with ❤️ from the ';
  about.append(country);

  const contact = document.createElement('p');
  contact.className = 'contact';
  contact.textContent = 'villiamrose@gmail.com';
  
  const card = document.createElement('div');
  card.className = 'card';
  card.append(about, contact);
  
  const mainElement = document.querySelector('.main');
  mainElement.append(card);
}