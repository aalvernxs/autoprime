# AutoPrime 🚗

O **AutoPrime** é um sistema web moderno para gerenciamento e visualização de veículos à venda. O projeto permite que usuários visualizem o catálogo de carros disponíveis, enquanto administradores possuem um painel para gerir o inventário de forma eficiente.

## 🚀 Tecnologias Utilizadas

Este projeto utiliza uma stack robusta para garantir escalabilidade e performance:

* **Front-end:** Angular & TypeScript.
* **Back-end:** Node.js & Express.
* **Base de Dados:** PostgreSQL com Prisma ORM.
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

## 👥 Integrantes do Grupo
* Arthur Rodrigues Alvernaz
* Lucas Duarte Drummond de Souza

---
*Este projeto está sendo desenvolvido como parte do curso de Ciência da Computação na Universidade FUMEC.*
