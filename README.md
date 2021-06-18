# livraria-crud-back
API Rest de cadastro (CRUD) de uma livraira utilizando NodeJS, Express e o ORM Sequelize.

## Como rodar o projeto
* Instalar as dependências do projeto:\
`npm install`
* Preencher o arquivo de configuração do banco de dados: `/src/config/database.js`
* Rodar a migration com o comando: \
`npx sequelize-cli db:migrate`
* Executar o projeto:\
`ǹpm start`

## Rotas
* GET
  * `/livros` retorna todos os livros cadastrados.
  * `/livros/:id` retorna as infos de um livro específico.
* POST
  * `/livros` realiza o cadastro de um novo livro.
* PUT
  * `/livros/:id`atualiza as infos de um livro específico.
* DELETE
  * `/livros/:id` exclui um livro específico.
