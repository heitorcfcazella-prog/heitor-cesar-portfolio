import aplicacoes from '../assets/aplicacoes.json';

function fecharMenu() {
  const menu = document.querySelector('.menu-container');
  if (menu) {
    menu.removeAttribute('open');
  }
}