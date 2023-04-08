import adoboImg from './img/adobo.jpg';

function buildMenu() {
  const item = document.querySelector(".item");
  const img = document.createElement('img');
  img.src = adoboImg;
  item.append(img);
}

export { buildMenu }