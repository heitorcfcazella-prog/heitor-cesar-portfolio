import aplicacoes from '../assets/aplicacoes.json' with { type: 'json' };

const gridHtmlCssJs = document.querySelector('#html-css-js .grid');
const gridPhp = document.querySelector('#php .grid');


function fecharMenu() {
  const menu = document.querySelector('.menu-container');
  if (menu) {
    menu.removeAttribute('open');
  }
}

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