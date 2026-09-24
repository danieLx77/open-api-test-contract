
const express = require("express");

const app = express();

app.use(express.json());

const produtos = [
  {
    id: 10,
    nome: "Notebook",
    preco: 3500.00,
    disponivel: true
  },
  {
    id: 20,
    nome: "Mouse",
    preco: 89.90,
    disponivel: false
  }
];

app.get("/produtos/:id", (req, res) => {

  const id = Number(req.params.id);

  const produto = produtos.find(
    (produto) => produto.id === id
  );

  if (!produto) {
    return res.status(404).json({
      mensagem: "Produto não encontrado"
    });
  }

  return res.status(200).json(produto);
  /*return res.status(200).json({
  id: produto.id,
  descricao: produto.nome,
  preco: produto.preco.toFixed(2),
  estoque: 5
});*/

});

module.exports = app;