# Mini API — Contratos OpenAPI

Projeto desenvolvido para uma aula sobre contratos OpenAPI e testes de contrato.

A aplicação contém uma API REST simples de produtos, um contrato definido em OpenAPI e testes automatizados que verificam a compatibilidade das respostas da API com o contrato.

## Tecnologias

* Node.js
* Express
* OpenAPI 3.0
* Jest
* Supertest
* jest-openapi

## Como executar

### 1. Instalar as dependências

```bash
npm ci
```

### 2. Iniciar a API

```bash
npm start
```

A API estará disponível em:

http://localhost:3000/produtos/10

### 3. Executar os testes de contrato

Em outro terminal, execute:

```bash
npm test
```

Os testes verificam se as respostas HTTP atendem às regras estabelecidas no arquivo `openapi.yaml`.

## Demonstração de quebra de contrato

Para simular uma alteração incompatível, abra o arquivo `src/app.js` e substitua:

```javascript
return res.status(200).json(produto);
```

Por:

```javascript
return res.status(200).json({
  id: produto.id,
  descricao: produto.nome,
  preco: produto.preco.toFixed(2),
  estoque: 5
});
```

Execute novamente:

```bash
npm test
```

O teste da resposta HTTP 200 deverá falhar porque os campos e os tipos retornados não correspondem ao contrato.

Para restaurar a compatibilidade, desfaça a alteração e execute novamente os testes.
