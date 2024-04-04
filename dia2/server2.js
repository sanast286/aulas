const http = require('http');
const PORT = 4000;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            sendResponse(res, 'Tela inicial', '<p>Um parágrafo da tela inicial</p>');
            break;
        case '/alunos':
            sendResponse(res, 'Lista de alunos', '<ul><li>Aluno A</li><li>Aluno B</li></ul>');
            break;
        case '/loop':
            let lista = '<ul>';
            for (let index = 0; index < 100; index++) {
                lista += `<li>Aluno ${index}</li>`;
            }
            lista += '</ul>';
            sendResponse(res, 'Lista de alunos', lista);
            break;
        default:
            sendResponse(res, `Tela inicial de ${req.url.substring(1)}`, '<p>Um parágrafo da tela inicial</p>');
    }
});

function sendResponse(res, title, content) {
    res.write('<html><body>');
    res.write(`<H1>${title}</H1>`);
    res.write(content);
    res.end('</body></html>');
}

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
