const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const emailNormalized = elements.email.value.trim();
  const passwordNormalized = elements.password.value.trim();

  if (emailNormalized === '' || passwordNormalized === '') {
    alert('All form fields must be filled in');
  } else {
    const info = {
      email: emailNormalized,
      password: passwordNormalized,
    };
    console.log(info);
    event.currentTarget.reset();
  }
}
