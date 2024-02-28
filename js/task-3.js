const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', handleInput);

function handleInput(event) {
  const inputNormalized = event.currentTarget.value.trim();

  if (inputNormalized === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = inputNormalized;
  }
}
