const express = require('express');
const app = express();

const produtos = [
    { id: 1, nome: 'Caderno', preco: 40 },
    { id: 2, nome: 'caneta', preco: 2 },
    { id: 3, nome: 'Calculadora', preco: 25 },
    { id: 4, nome: 'Borracha', preco: 10 },
    { id: 5, nome: 'Lapiseira', preco: 20 }
];

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.get('/produtos/:id', (req, res) => {
    const id = Number(req.params.id);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({
            mensagem: 'Produto não encontrado!'
        });
    }

    res.json(produto);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});