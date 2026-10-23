const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem-vindo à nossa empresa!');
});

app.get('/sobre', (req, res) => {
    res.send('Nossa empresa oferece produtos de qualidade para o seu pet, sendo uma empresa focada no bem estar do seu animal.');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});