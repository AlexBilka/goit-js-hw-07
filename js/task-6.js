const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('#controls input');
const boxConteiner = document.querySelector('#boxes');

createBtn.addEventListener('click', handleCreate);
destroyBtn.addEventListener('click', handlerDestroy);

function handleCreate() {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    return alert('Invalid value, value must be less than 100');
  }
  destroyBoxes();
  createBoxes(amount);
  input.value = '';
}

function handlerDestroy() {
  destroyBoxes();
}

function createBoxes(amount) {
  const divArray = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = 30 + 10 * i + 'px';
    div.style.height = 30 + 10 * i + 'px';
    div.style.backgroundColor = getRandomHexColor();
    divArray.push(div);
  }
  boxConteiner.append(...divArray);
}

function destroyBoxes() {
  boxConteiner.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
