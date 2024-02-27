const changeColor = document.querySelector('button');
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');

changeColor.addEventListener('click', handleClick);

function handleClick() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
