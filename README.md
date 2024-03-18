# Projeto Insonia
## API

O presente projeto consistem em uma ToDo List para cadastrar tarefas diária e pesistir estes em banco de dados MongoDB

Este projeto foi dividido em 4 fases:

 - **Fase 1**: Desenvolvimento do backend
 - **Fase 2**: Desenvolvimento do frontend
 - **Fase 3**: Consumo da api no frontend usando fetch
 - **Fase 4**: Testes e deploy no heroku

### Execução Local

Para fazer testes locais na aplicação, após clonar, abra o terminal dentro da pasta do projeto e execute o comando ```yarn install``` ou ```npm install``` para instalas as dependências necessárias. Instaladas as dependências, execute o script de execução ```yarn dev``` ou ```yarn run dev``` para execução em ambiente de desenvolvimento. 

Para fazer os testes de rotas CRUD da ToDo List utilize um API Client como Insomnia ou Postman, ou Thunder Client do vscode. É necessário ter o mongodb instalado localmente para teste em ambiente de desenvolvimento. Crie um arquivo chamado ```.env.dev``` na raiz da pasta e preencha conforme o arquivo de exemplo.

Com a aplicação rodando, teste o CRUD a partir da rota ```<hostname>:<port>/api/todo```.

#### Model

Modelo de dados de estrutura de dados para persistência de dados no banco de dados:

```json
{
    "title": "",
    "description": "",
    "priority": "low" || "mid" || "high",
    "status": "pendind" || "making" || "done",
    "deadline": "YYYY-MM-DD"
}
```

---

##
Visite o projeto final termina clicando [aqui](https://insonia.herokuapp.com/). Lá você encontrará o resultado final do projeto com todas as fases implementadas. Acesse também apenas o [API](https://d7ffce5ee98e14b600a806eb38f389.herokuapp.com/) do projeto para testes em um API Client.

---

Licensed by [MIT Lincense](./LICENSE).
