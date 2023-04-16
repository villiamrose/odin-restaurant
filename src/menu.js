import { getItems } from './items.js';

export { buildMenu };

function buildMenu() {
  const main = document.querySelector('.main');
  main.childNodes.forEach(child => child.remove());

  const menu = document.createElement('div');
  menu.className = 'menu';
  appendItems(menu);

  main.append(menu);
}

function appendItems(menu) {
  const items = getItems();

  items.forEach(item => {
    const itemElement = buildItem(item);
    menu.append(itemElement);
  });
}

function buildItem(item) {
  const name = document.createElement('div');
  name.className = 'name';
  name.textContent = item.name;

  const price = document.createElement('div');
  price.className = 'price';
  price.textContent = `P${item.price.toFixed(2)}`;
  
  const detail = document.createElement('div');
  detail.className = 'detail';
  detail.append(name, price);

  const img = document.createElement('img');
  img.className = 'image';
  img.alt = item.name;
  img.src = require(`./img/${item.name.toLowerCase()}.jpg`);

  const itemElement = document.createElement('div');
  itemElement.className = 'item';
  itemElement.append(detail, img);

  return itemElement;
}