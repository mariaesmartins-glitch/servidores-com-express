const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem-vindo ao nosso curso!');
});

app.get('/cursos', (req, res) => {
    res.send('Cursos oferecidos: Lógica de programação, Banco de Dados e JavaScript.');
});

app.get('/professores', (req, res) => {
    res.send('Professores: Willer e Samuel.');
});

app.get('/contato', (req, res) => {
    res.send('Contato: contato@curso.com | Telefone: (48) 452-5644');
});

// Rota para páginas não encontradas
app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});