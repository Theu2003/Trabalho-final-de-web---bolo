

# Bolo na Hora: Receitas e Confeiteiros de Salinas

## Colaboradores

  * Mateus Martins Peres
  * Gustavo Rodrigues de Oliveira 
  * Jefferson Eduardo Santos Lima 
  * Victor Martins Almeida

## 1\. Visão Geral do Projeto

**Bolo na Hora** é uma plataforma web criada para ser o ponto de encontro dos amantes de bolos em Salinas, MG. O projeto, desenvolvido como Trabalho Final da disciplina de Desenvolvimento Web, conecta quem ama cozinhar com quem prefere comprar, oferecendo um vasto acervo de receitas de bolos e um diretório completo de confeiteiros locais.

### O Problema

Atualmente, é difícil encontrar de forma centralizada tanto receitas de qualidade quanto confeiteiros na cidade de Salinas. A busca por essas informações é dispersa e ineficiente.

### Nossa Solução

Criamos um hub digital que resolve esse problema, com duas seções principais:

  * **Receitas**: Um catálogo para inspirar cozinheiros amadores e profissionais.
  * **Confeiteiros**: Uma vitrine digital para que os talentos de Salinas possam divulgar seus produtos, portfólio e contatos.

### Objetivo Principal

Fortalecer a economia local, dar visibilidade aos confeiteiros da cidade e facilitar a vida de quem busca comprar ou fazer bolos, tornando-se a principal referência gastronômica do segmento em Salinas.

## 2\. Funcionalidades

O projeto é dividido em duas grandes áreas: o **Site Público** e o **Painel Administrativo**.

### Site Público

  * **Página Inicial (`index.html`)**: Apresenta o site, exibe receitas e confeiteiros em destaque.
  * **Página de Receitas (`receitas.html`)**: Lista todas as receitas disponíveis, com filtros por categoria e um campo de busca para facilitar a navegação.
  * **Página de Detalhe da Receita (`receita1.html`, `receita2.html`, etc.)**: Mostra os ingredientes, o modo de preparo, tempo, rendimento, e um vídeo tutorial incorporado. Inclui um botão para imprimir a receita.
  * **Página de Confeiteiros (`confeiteiros.html`)**: Exibe uma galeria com os confeiteiros cadastrados, suas biografias e links para contato via WhatsApp e Instagram. Os dados são carregados dinamicamente a partir do `localStorage`.
  * **Página de Contato (`contato.html`)**: Um formulário para que os usuários possam enviar dúvidas, sugestões e outras mensagens.

### Painel Administrativo (`/adm`)

  * **Login (`login.html`)**: Página de autenticação para acessar a área restrita. Possui credenciais pré-definidas para demonstração.
  * **Dashboard (`adm.html`)**: Tela inicial do painel, com estatísticas e atalhos para as principais funcionalidades.
  * **Gerenciamento de Confeiteiros**:
      * **Listar (`adm/confeiteiros/listar.html`)**: Tabela com todos os confeiteiros cadastrados, permitindo editar ou excluir cada um.
      * **Adicionar (`adm/confeiteiros/adicionar.html`)**: Formulário para cadastrar um novo confeiteiro.
      * **Editar (`adm/confeiteiros/editar.html`)**: Formulário pré-preenchido para alterar os dados de um confeiteiro existente.
  * **Gerenciamento de Receitas**:
      * **Gerenciar (`adm/gerenciar-receitas.html`)**: Exibe as receitas em formato de cards, com filtros e busca.
      * **Adicionar (`adm/nova-receita.html`)**: Formulário completo para adicionar uma nova receita, com campos dinâmicos.
      * **Editar (`adm/editar-receita.html`)**: Formulário para alterar os dados de uma receita existente.

## 3\. Tecnologias Utilizadas

O projeto foi construído inteiramente com tecnologias front-end, simulando o comportamento de um sistema dinâmico através do navegador.

  * **HTML5**: Para a estruturação semântica de todas as páginas.
  * **CSS3**: Para estilização, utilizando variáveis (`:root`) para um tema consistente e design responsivo com Media Queries.
  * **JavaScript**: Para toda a interatividade, manipulação do DOM e lógica de "banco de dados".

### Simulação de Banco de Dados

Para simular a persistência de dados sem a necessidade de um back-end, o projeto utiliza a **API de `localStorage`** do navegador. O arquivo `js/database.js` inicializa um conjunto de dados de exemplo (confeiteiros) se nenhum dado for encontrado, permitindo que as operações de Adicionar, Editar e Excluir funcionem de forma persistente na máquina do usuário.

## 4\. Como Executar o Projeto

Como este é um projeto puramente front-end, não há necessidade de um servidor complexo ou compilação.

### Opção 1: Abrir o Arquivo Diretamente

1.  Clone ou baixe este repositório.
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` em seu navegador de preferência (Google Chrome, Firefox, etc.).

### Opção 2: Usando um Servidor Local (Recomendado)

Para uma experiência mais próxima de um ambiente de produção e para evitar possíveis problemas com requisições de arquivos locais, é recomendado usar um servidor de desenvolvimento. O Visual Studio Code, com a extensão **Live Server**, é uma ótima opção.

1.  Abra a pasta do projeto no VS Code.
2.  Instale a extensão `Live Server`.
3.  Clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".

### Acesso ao Painel Administrativo

Para acessar a área de gerenciamento, navegue até a página de login:

  * **URL**: `adm/login.html`
  * **Credenciais de teste** (definidas em `js/login.js`):
      * **Email**: `admin@receitasdebolo.com`
      * **Senha**: `bolo123`

## 5\. Referências Técnicas Específicas

As funcionalidades do projeto foram construídas com base na documentação oficial da web e em guias de referência da comunidade.

  * **Simulação de Banco de Dados com `localStorage`**: A persistência dos dados dos confeiteiros é realizada com a Web Storage API. O método `localStorage.setItem()` é usado para salvar os dados como uma string JSON, e `localStorage.getItem()` para recuperá-los.

      * **Referência**: [MDN Web Docs - Web Storage API](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Storage_API)
      * **Referência**: [MDN Web Docs - `Window.localStorage`](https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage%5D\(https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage\))

  * **Manipulação do DOM para Renderização Dinâmica**: A lista de confeiteiros (`confeiteiros.html`) e a tabela no painel administrativo (`adm/confeiteiros/listar.html`) são criadas dinamicamente em JavaScript. Um laço de repetição (`forEach`) percorre o array de dados e, para cada item, um novo elemento HTML é criado e inserido no DOM.

      * **Referência**: [MDN Web Docs - Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
      * **Referência**: [MDN Web Docs - `document.createElement()`](https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement%5D\(https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement\))
      * **Referência**: [MDN Web Docs - `Node.appendChild()`](https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild%5D\(https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild\))

  * **Filtragem de Conteúdo em Tempo Real**: Na página de receitas (`receitas.html`), a filtragem é feita no lado do cliente. Eventos de clique e de digitação (`addEventListener`) disparam uma função que lê os `data-attributes` dos elementos e altera seu estilo (`style.display`) para mostrá-los ou escondê-los.

      * **Referência**: [MDN Web Docs - `EventTarget.addEventListener()`](https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener%5D\(https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener\))
      * **Referência**: [MDN Web Docs - Usando `data-attributes`](https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/pt-BR/docs/Learn/HTML/Howto/Use_data_attributes%5D\(https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Howto/Use_data_attributes\))

  * **Gerenciamento de Formulários Dinâmicos**: Os formulários de "Adicionar/Editar Receita" permitem adicionar e remover campos de ingredientes e instruções dinamicamente, utilizando JavaScript para criar e remover elementos do DOM em tempo real.

      * **Referência**: [MDN Web Docs - `Element.remove()`](https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/pt-BR/docs/Web/API/Element/remove%5D\(https://developer.mozilla.org/pt-BR/docs/Web/API/Element/remove\))
      * **Referência**: [MDN Web Docs - `Element.closest()`](https://www.google.com/search?q=%5Bhttps://developer.mozilla.org/pt-BR/docs/Web/API/Element/closest%5D\(https://developer.mozilla.org/pt-BR/docs/Web/API/Element/closest\))

  * **Layout Responsivo com Flexbox**: A maior parte do layout dos cards e da estrutura das páginas foi construída utilizando CSS Flexbox para garantir que a interface se adapte a diferentes tamanhos de tela.

      * **Referência**: [CSS-Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)