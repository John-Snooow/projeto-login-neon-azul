// Seleciona o elemento com a classe "wrapper" no documento HTML
const wrapper = document.querySelector('.wrapper');

// Seleciona o elemento com a classe "register-link" no documento HTML
const registerLink = document.querySelector('.register-link');

// Seleciona o elemento com a classe "login-link" no documento HTML
const loginLink = document.querySelector('.login-link');

// Evita o salto do link "#" e alterna o estado da interface.
registerLink.addEventListener('click', (event) => {
  event.preventDefault();
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', (event) => {
  event.preventDefault();
  wrapper.classList.remove('active');
});
