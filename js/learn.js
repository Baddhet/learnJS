const popup = document.querySelector('.popup');
const loginButton = document.querySelector('.login');
const qwe = document.querySelector('.qwe');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passField = document.getElementById('password');
const enterButton = document.querySelector('.enter');

const validate = () => {
  if (nameField.validity.valid && emailField.validity.valid && passField.validity.valid) {
    enterButton.classList.add('valid');
    enterButton.disabled = false;
  } else {
    enterButton.classList.remove('valid');
    enterButton.disabled = true;
  }
}

loginButton.addEventListener('click', () => {
  document.body.classList.add('not-sroll');
  popup.classList.add('visible');
  qwe.classList.add('visible');
});

qwe.addEventListener('click', () => {
  document.body.classList.remove('not-sroll');
  popup.classList.remove('visible');
  qwe.classList.remove('visible');
});

nameField.addEventListener('input', () => {
  validate();
});
emailField.addEventListener('input', () => {
  validate();
});
passField.addEventListener('input', () => {
  validate();
});