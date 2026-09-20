import aplicacoes from '../assets/aplicacoes.json' with { type: 'json' };

const gridHtmlCssJs = document.querySelector('#html-css-js .grid');
const gridPhp = document.querySelector('#php .grid');


function fecharMenu() {
  const menu = document.querySelector('.menu-container');
  if (menu) {
    menu.removeAttribute('open');
  }
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

function carregarProjetosHtmlCssJs() {
  const tagsDesejadas = ["HTML", "CSS", "JavaScript"];

  const projetosFiltrados = aplicacoes.filter(item =>
    item.tags.some(tag => tagsDesejadas.includes(tag))
  );

  gridHtmlCssJs.innerHTML = projetosFiltrados.map(projeto => `
    <div class="card-aplicacoes">
      <h2>${projeto.titulo}</h2>
      <p>${projeto.descricao}</p>
      <div class="area-tags">
        ${projeto.tags.map(tag => `<label class="tags">${tag}</label>`).join('')}
      </div>
      <div class="area-links">
        <a href="${projeto.github}" class="github-link">Repositório</a>
        ${projeto.deploy ? `<a href="${projeto.deploy}" target="_blank" class="deploy-link">Deploy</a>` : ''}
      </div>
    </div>
    `).join('');
}

carregarProjetosHtmlCssJs();

function carregarProjetosPhp() {
  const tagsDesejadas = ["PHP"];

  const projetosFiltrados = aplicacoes.filter(item =>
    item.tags.some(tag => tagsDesejadas.includes(tag))
  );

  gridPhp.innerHTML = projetosFiltrados.map(projeto => `
    <div class="card-aplicacoes">
      <h2>${projeto.titulo}</h2>
      <p>${projeto.descricao}</p>
      <div class="area-tags">
        ${projeto.tags.map(tag => `<label class="tags">${tag}</label>`).join('')}
      </div>
      <div class="area-links">
        <a href="${projeto.github}" class="github-link">Repositório</a>
        ${projeto.deploy ? `<a href="${projeto.deploy}" target="_blank" class="deploy-link">Deploy</a>` : ''}
      </div>
    </div>
    `).join('');
}

carregarProjetosPhp();