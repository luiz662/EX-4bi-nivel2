## 🛠️ Tecnologias Utilizadas e Suas Funções

O ecossistema deste projeto foi estruturado utilizando ferramentas modernas de desenvolvimento front-end, focadas em alta performance, modularidade e rapidez no fluxo de trabalho:

### 1. React (v18.2.0)
* **O que é:** Uma biblioteca JavaScript de código aberto, baseada em componentes, desenvolvida pela Meta (Facebook).
* **Função no Projeto:** Atua como o núcleo da aplicação. O React permite dividir a interface em pequenos blocos de código reutilizáveis e independentes chamados **Componentes** (como botões, listas e formulários), facilitando a gestão do estado e garantindo uma renderização eficiente na tela à medida que os dados mudam.

### 2. Vite (v5.1.4)
* **O que é:** Um construtor de aplicações (*bundler* e *build tool*) de última geração criado para substituir ferramentas mais antigas (como o *Create React App*).
* **Função no Projeto:** É responsável por gerir todo o ambiente de desenvolvimento local. O Vite oferece:
  * **Inicialização Instantânea:** O servidor local arranca quase imediatamente, pois aproveita os Módulos ES nativos do navegador.
  * **Hot Module Replacement (HMR):** Quando fazes alterações e salvas um ficheiro no VS Code, o Vite atualiza apenas esse bloco específico no navegador em milissegundos, sem recarregar a página inteira e mantendo o estado atual do teu exercício.

### 3. @vitejs/plugin-react (v4.2.1)
* **O que é:** O plugin oficial de integração entre o Vite e o ecossistema do React.
* **Função no Projeto:** Como os navegadores não conseguem ler ficheiros `.jsx` nativamente, este plugin instrui o compilador **Babel** a transformar essa sintaxe (que mistura HTML com JavaScript) em código JavaScript puro e limpo, além de ativar o suporte oficial ao *Fast Refresh*.

### 4. HTML5 Semântico e Módulos ES
* **O que é:** A quinta versão da linguagem de marcação padrão da web combinada com o sistema moderno de importação do JavaScript.
* **Função no Projeto:** O ficheiro `index.html` serve como a raiz da Single Page Application (SPA). Através da tag `<script type="module">`, o navegador carrega os ficheiros JavaScript utilizando comandos nativos como `import` e `export`, tornando a aplicação mais leve e organizada.
