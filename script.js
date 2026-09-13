function copiarEmail(event, email) {
  event.preventDefault(); 
  navigator.clipboard.writeText(email).then(() => {
    alert('E-mail copiado para a área de transferência!');
  }).catch(() => {
    alert('Erro ao copiar e-mail.');
  });
}

function fecharMenu() {
  const menu = document.querySelector('.menu-container');
  menu.removeAttribute('open');
}

function initThemeToggle() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle');

  // Define o tema inicial com base no localStorage
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Verifica o estado atual direto do HTML
      const currentAttr = document.documentElement.getAttribute('data-theme');
      
      if (currentAttr === 'light') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  });
}

initThemeToggle();