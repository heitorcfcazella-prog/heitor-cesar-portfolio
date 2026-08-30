function copiarEmail(event, email) {
  event.preventDefault(); 
  navigator.clipboard.writeText(email);
}

function fecharMenu() {
  const menu = document.querySelector('.menu-container');
  menu.removeAttribute('open');
}

const themeToggleBtn = document.getElementById('theme-toggle');

// Recupera o tema salvo no navegador ou usa Dark como padrão
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
}

// Altera o tema ao clicar no botão
themeToggleBtn.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});