const express = require('express');
const app = express();

app.get('/somar/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    res.json({ resultado: num1 + num2 });
});

app.get('/subtrair/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    res.json({ resultado: num1 - num2 });
});

app.get('/multiplicar/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    res.json({ resultado: num1 * num2 });
});

app.get('/dividir/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    if (num2 === 0) {
        return res.status(400).json({
            mensagem: 'Não é possível dividir por zero!'
        });
    }

    res.json({ resultado: num1 / num2 });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});