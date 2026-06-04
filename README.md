# AutoPrime 🚗

O **AutoPrime** é um sistema web moderno para gerenciamento e visualização de veículos à venda. O projeto permite que usuários visualizem o catálogo de carros disponíveis, enquanto administradores possuem um painel para gerir o inventário de forma eficiente.

## 🚀 Tecnologias Utilizadas

Este projeto está sendo organizado em duas camadas de API:

* **Mock API:** JSON Server para desenvolvimento rápido e prototipação.
* **API real:** Node.js com Express para expor os endpoints do sistema.
* **Base de Dados:** SQL, preferencialmente PostgreSQL.
* **Cliente:** Angular consumindo a API via `HttpClient`.
* **Autenticação:** JWT (JSON Web Tokens).

## 📋 Funcionalidades Planejadas

### Para Usuários
* Listagem de veículos (Header já implementado!).
* Visualização de detalhes técnicos dos carros.
* Filtros por marca, ano e preço.

### Para Administradores (Protegido por Login)
* Painel de Dashboard com métricas (Total de veículos, média de preços).
* Cadastro, edição e remoção de veículos (CRUD).
* Controle de acesso e proteção de rotas.
* Consumo de API com integração SQL.

## 🔌 Como funciona a integração

O JSON Server não fala direto com SQL. Ele serve para simular endpoints enquanto o backend real ainda está em construção.

Fluxo recomendado:

1. O Angular consome a API por `HttpClient`.
2. O backend Express recebe as requisições.
3. O backend acessa o banco SQL.
4. Para testes rápidos, o JSON Server pode substituir temporariamente o backend real.

Se quiser seguir o caminho certo para produção, use Express + SQL. Se quiser apenas simular dados no front, use JSON Server.

## 📂 Estrutura do Repositório

O projeto está dividido em duas partes principais para facilitar o desenvolvimento independente:

```text
/
├── frontend-angular/  # Interface do usuário e lógica de cliente
└── backend-node/      # API, autenticação e conexão com a base de dados
```

## 🛠️ Como Executar o Projeto

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/aalvernxs/autoprime.git
   ```

2. **Executar o Front-end:**
   ```bash
   cd frontend-angular
   npm install
   ng serve
   ```
   Acesse `http://localhost:4200/`.

4. **Executar o backend real ou mock:**
   Veja as instruções em [backend-node/README.md](backend-node/README.md).

## 👥 Integrantes do Grupo
* Arthur Rodrigues Alvernaz
* Lucas Duarte Drummond de Souza

---
*Este projeto está sendo desenvolvido como parte do curso de Ciência da Computação na Universidade FUMEC.*
