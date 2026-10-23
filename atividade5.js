
const express = require('express');
const app = express();

app.use(express.json());

let tarefas = [
    { id: 1, descricao: 'Estudar JavaScript', concluida: false },
    { id: 2, descricao: 'Fazer trabalho de História', concluida: false },
    { id: 3, descricao: 'Estudar trabalho de Matemática', concluida: true }
];


app.get('/tarefas', (req, res) => {
    res.json(tarefas);
});


app.get('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);
    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        return res.status(404).json({
            mensagem: 'Tarefa não encontrada!'
        });
    }

    res.json(tarefa);
});


app.post('/tarefas', (req, res) => {
    const novaTarefa = {
        id: tarefas.length > 0
            ? Math.max(...tarefas.map(t => t.id)) + 1
            : 1,
        descricao: req.body.descricao,
        concluida: false
    };

    if (!novaTarefa.descricao) {
        return res.status(400).json({
            mensagem: 'Informe a descrição da tarefa!'
        });
    }

    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);
});

app.delete('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);
    const indice = tarefas.findIndex(t => t.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Tarefa não encontrada!'
        });
    }

    tarefas.splice(indice, 1);

    res.json({
        mensagem: 'Tarefa removida com sucesso!'
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!');
});