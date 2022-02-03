const refs = {
  submitBtn: document.querySelector('button[type="submit"]'),
  loginForm: document.querySelector('.login-form'),
};

refs.loginForm.addEventListener('submit', formSubmit);

function formSubmit(e) {
  e.preventDefault();
  console.log(e);
  const inputEmail = e.target.elements.email;
  const inputPassword = e.target.elements.password;
  if (!inputEmail.value.trim() || !inputPassword.value.trim()) {
    alert('Enter an email and password!');
  } else {
    const formData = {
      email: inputEmail.value,
      password: inputPassword.value,
    };
    console.log(formData);
    refs.loginForm.reset();
  }
}
