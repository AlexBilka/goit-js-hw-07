const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // const elements = event.currentTarget.elements;
  // console.log(event);
  // console.log(elements);
  // const emailNormalized = elements.email.value.trim();
  // const passwordNormalized = elements.password.value.trim();

  console.log(event);
  const emailNormalized = event.currentTarget.elements.email.value.trim();
  const passwordNormalized = event.currentTarget.elements.password.value.trim();

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

  // if (elements.email.value === '' || elements.password.value === '') {
  //   alert('All form fields must be filled in');
  // } else {
  //   const info = {
  //     email: emailNormalized,
  //     password: passwordNormalized,
  //   };
  //   console.log(info);
  //   event.currentTarget.reset();
  // }
}
