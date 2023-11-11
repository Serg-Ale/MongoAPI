
# Sistema de Controle de Tarefas com Node.js, Express e Mongoose

Este projeto consiste em uma API REST para controle de tarefas, utilizando o MongoDB como mecanismo de persistência.

## Pré-requisitos

Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do seu projeto e adicione as seguintes variáveis:

   ```env
   NODE_ENV=development
   MONGO_URL="mongodb+srv://sua-url-do-mongodb"
   PORT=3000
   ```

## Executando o Projeto

Execute o projeto com o seguinte comando:

```bash
npm start
```

O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

## Rotas da API

### Criação de Tarefa

- **Rota:** `POST /tasks`
- **Descrição:** Cria uma nova tarefa.
- **Corpo da Requisição:**
  ```json
  {
    "name": "Nome da Tarefa",
    "description": "Descrição da Tarefa",
    "difficulty": 3
  }
  ```

### Edição de Tarefa

- **Rota:** `PUT /tasks/:id`
- **Descrição:** Edita uma tarefa existente.
- **Corpo da Requisição:**
  ```json
  {
    "name": "Novo Nome",
    "description": "Nova Descrição",
    "difficulty": 2
  }
  ```

### Exclusão de Tarefa

- **Rota:** `DELETE /tasks/:id`
- **Descrição:** Exclui uma tarefa existente.

### Lista de Todas as Tarefas

- **Rota:** `GET /tasks`
- **Descrição:** Retorna todas as tarefas.

### Busca de Tarefa Específica

- **Rota:** `GET /tasks/:id`
- **Descrição:** Retorna uma tarefa específica com base no ID.

## Estrutura do Projeto

A estrutura do projeto segue o padrão MVC (Model-View-Controller).

- `TaskRoute.js`: Define as rotas da API.
- `TaskModel.js`: Define o esquema do modelo de tarefa no MongoDB.
- `TaskController.js`: Contém as funções de controle para manipulação de tarefas.

