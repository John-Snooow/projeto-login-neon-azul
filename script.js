// Seleciona o elemento com a classe "wrapper" no documento HTML
const wrapper = document.querySelector('.wrapper');

// Seleciona o elemento com a classe "register-link" no documento HTML
const registerLink = document.querySelector('.register-link');

// Seleciona o elemento com a classe "login-link" no documento HTML
const loginLink = document.querySelector('.login-link');

// Adiciona um evento de clique ao elemento "registerLink"
registerLink.onclick = () => {
  // Adiciona a classe "active" ao elemento "wrapper"
  wrapper.classList.add('active');
}

// Adiciona um evento de clique ao elemento "loginLink"
loginLink.onclick = () => {
  // Remove a classe "active" do elemento "wrapper"
  wrapper.classList.remove('active');
}