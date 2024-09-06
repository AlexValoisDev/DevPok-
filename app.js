function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
       section.innerHTML = "<p>Pokémon não localizado !!!. Isso não é um Pokémon</p>"
      return
    }

campoPesquisa = campoPesquisa.toLowerCase()

// Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
// se no dado includes campoPesquisa
      if (titulo.includes(campoPesquisa) || (campoPesquisa) || tags.includes(campoPesquisa)) {
          // Cria um novo elemento HTML para cada item do resultado
      resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}   
                </a> 
            </h2>
            <p class="descricao-meta">${dado.descricao}.</p> <a href=${dado.link} target="_blank">Mais Informações</a> 
        </div>
      `;
      }
    }

    if (!resultados) {
      resultados = "Pokémon não localizado !!!"
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }