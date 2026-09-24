
const request = require("supertest");
const path = require("path");
const jestOpenAPI = require("jest-openapi").default;

const app = require("../src/app");

// Carrega o contrato OpenAPI.
const contrato = path.join(
  __dirname,
  "../openapi.yaml"
);

jestOpenAPI(contrato);

describe("Testes de contrato - API de Produtos", () => {

  test("Deve retornar um produto conforme o contrato", async () => {

    const resposta = await request(app)
      .get("/produtos/10");

    expect(resposta.status).toBe(200);

    expect(resposta).toSatisfyApiSpec();

  });

  test("Deve retornar 404 conforme o contrato", async () => {

    const resposta = await request(app)
      .get("/produtos/999");

    expect(resposta.status).toBe(404);

    expect(resposta).toSatisfyApiSpec();

  });

});