# Backend AutoPrime

Este diretório deve concentrar a API do projeto.

## Regra prática

JSON Server é bom para mock e desenvolvimento rápido, mas não integra com SQL diretamente. Para ler e gravar no banco, a API real precisa ser feita em Node.js com Express, usando uma camada de acesso ao banco, como Prisma, pg ou mysql2.

## Fluxo recomendado

1. O Angular consome os endpoints com HttpClient.
2. O backend Express recebe as requisições.
3. O backend consulta ou grava no banco SQL.
4. Se precisar simular dados antes da API real, use JSON Server em paralelo.

## Endpoints sugeridos

- GET /cars
- GET /cars/:id
- POST /cars
- PUT /cars/:id
- DELETE /cars/:id
- POST /auth/login

## Exemplo de contrato de carro

```json
{
  "id": 1,
  "marca": "Honda",
  "modelo": "Civic EXL 2.0",
  "ano": 2023,
  "preco": 145000,
  "km": 15000,
  "combustivel": "Flex",
  "fotos": ["url1", "url2"],
  "descricao": "..."
}
```

## Próximo passo prático

Se você quiser, o próximo passo é eu montar a estrutura inicial do backend com Express + SQL e adaptar o serviço `CarService` do Angular para usar `HttpClient`.

### Como rodar este backend minimal

1. Entre na pasta do backend:

```bash
cd backend-node
```

2. Instale dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm run start
```

O servidor inicia em `http://localhost:3000` com endpoints `GET /cars`, `GET /cars/:id`, `POST /cars`, `PUT /cars/:id` e `DELETE /cars/:id`.