const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  elements.password.value.trim();
  elements.email.value.trim();

  if (elements.email.value === '' || elements.password.value === '') {
    alert('All form fields must be filled in');
  } else {
    const info = {
      email: elements.email.value.trim(),
      password: elements.password.value.trim(),
    };
    console.log(info);
    event.currentTarget.reset();
  }
}
