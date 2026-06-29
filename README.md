# 🚗 AutoPrime — Sistema de Venda de Veículos

Sistema web completo para gerenciamento e visualização de veículos à venda, desenvolvido como projeto acadêmico da disciplina de Desenvolvimento Web com Angular.


---

## 📋 Sobre o Projeto

O AutoPrime permite que usuários naveguem pelo catálogo de veículos disponíveis e que administradores gerenciem o estoque por meio de um painel protegido, com operações completas de cadastro, edição e exclusão.

---

## 🛠 Tecnologias Utilizadas

**Frontend:**
- Angular 20 (Standalone Components, Signals)
- TypeScript
- Angular Material
- Reactive Forms + Validators
- HttpClient

**Backend:**
- Node.js + Express
- SQLite (via sqlite3)
- JWT (JSON Web Token)

**Ferramentas:**
- Git + GitHub (GitFlow + Conventional Commits)

---

## 📁 Estrutura do Projeto
autoprime/

├── frontend-angular/     # Aplicação Angular

└── backend-node/         # API REST Node.js

 ---

## 🖥 Páginas da Aplicação

| Página | Rota | Descrição |
|---|---|---|
| Home | `/` | Listagem de veículos com busca e filtros |
| Detalhes | `/carro/:id` | Detalhes do veículo com carrossel de fotos |
| Login | `/login` | Autenticação do administrador |
| Painel Admin | `/admin` | Gerenciamento de veículos |
| Cadastro | `/admin/cadastro` | Formulário de cadastro de veículo |
| Edição | `/admin/editar/:id` | Formulário de edição de veículo |
| Dashboard | `/admin/dashboard` | Relatórios e estatísticas |

---

## 🔌 Endpoints da API

| Método | Rota | Descrição |
|---|---|---|
| GET | `/cars` | Lista todos os veículos |
| GET | `/cars/:id` | Busca veículo por ID |
| POST | `/cars` | Cadastra novo veículo |
| PUT | `/cars/:id` | Atualiza veículo |
| DELETE | `/cars/:id` | Remove veículo |
| POST | `/auth/login` | Autentica e retorna JWT |

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado
- Angular CLI instalado (`npm install -g @angular/cli`)

### Backend

```bash
cd backend-node
npm install
node index.js
```

O backend estará disponível em `http://localhost:3000`

### Frontend

```bash
cd frontend-angular
npm install
ng serve
```

O frontend estará disponível em `http://localhost:4200`

---

## 🔐 Credenciais de Acesso

Para acessar o painel administrativo:

- **Email:** `admin@autoprime.com`
- **Senha:** `123456`

---

## ✅ Funcionalidades Implementadas

- [x] Listagem de veículos consumindo API real
- [x] Busca e filtros por marca, ano e preço
- [x] Detalhes do veículo com carrossel de fotos
- [x] Login com Reactive Forms e validação
- [x] Proteção de rotas com AuthGuard
- [x] CRUD completo de veículos
- [x] Dashboard com relatórios usando Angular Signals
- [x] Lazy Loading nas rotas
- [x] Backend REST com Node.js + Express
- [x] Banco de dados SQLite
- [x] Commits semânticos + GitFlow

---

## 📂 Repositório

[https://github.com/aalvernxs/autoprime](https://github.com/aalvernxs/autoprime)
