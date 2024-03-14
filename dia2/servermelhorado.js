// Executem a instalação do express ' npm install express '
const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('<html><body><H1>Tela inicial</H1><p>Um parágrafo da tela inicial</p></body></html>');
});

app.get('/alunos', (req, res) => {
    res.send('<html><body><H1>Lista de alunos</H1><ul><li>Aluno A</li><li>Aluno B</li></ul></body></html>');
});

app.get('/loop', (req, res) => {
    let lista = '<ul>';
    for (let index = 0; index < 100; index++) {
        lista += `<li>Aluno ${index}</li>`;
    }
    lista += '</ul>';
    res.send(`<html><body><H1>Lista de alunos</H1>${lista}</body></html>`);
});

app.get('/:page', (req, res) => {
    res.send(`<html><body><H1>Tela inicial de ${req.params.page}</H1><p>Um parágrafo da tela inicial</p></body></html>`);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
