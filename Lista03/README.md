# Lista 3 - CRUD
Atividade revisão dos conceitos de CRUD

Tecnologias utilizadas:  
  [Ubuntu](https://ubuntu.com/) |
  [Docker](https://www.docker.com/) |
  [PostgreSQL](https://www.postgresql.org/) |
  [Node](https://nodejs.org/en/about) |
  [VSCode](https://code.visualstudio.com/)

Para executar a aplicação, execute os seguintes passos:
- Configurar o ambiente Docker:
  - [Instalação](https://docs.docker.com/engine/install/ubuntu/)

- Configurar o SGBD [PostegreSQL](https://hub.docker.com/_/postgres) via conteiner Docker:
  - Baixar imagem:
    ~~~shellscript
      $ docker pull postgres
    ~~~
  - Configurar/Iniciar o container:
    ~~~shellscript
      $ docker run --name postgresDb -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=D1DBE -d postgres
    ~~~

- Executar a aplicação:
  Utilizar a versão mais recente do [NodeJS](https://nodejs.org/en).
  - Acessar o diretório raiz(/Lista03):
    ~~~shellscript
      $ cd ~/Lista03 
    ~~~
  - Instalar dependências:
    ~~~shellscript
      $ npm install
    ~~~
  - Executar a aplicação:
    Na primeira execução da aplicação, tirar o comentário da linha [// InitDB.initDDL()](https://github.com/danielsantosoliveira/IF_BACK-END/blob/d17190e65e090a7c79fb6eb45095289d98a94f23/Lista03/main.js#L14) do arquivo main.js, para gerar as tabelas do SGBD.
    ~~~shellscript
      $ node main.js 
    ~~~

> Para excluir os registros no Banco de Dados, tirar o comentário das linhas de deleção dos dados, presentos no módulo [main.js](https://github.com/danielsantosoliveira/IF_BACK-END/blob/d17190e65e090a7c79fb6eb45095289d98a94f23/Lista03/main.js#L50).
