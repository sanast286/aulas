const http = require('http');
const PORT = 4000;


const server = http.createServer((req, res) => {
    
    if (req.url==='/'){
        res.write('<html><body>')

        res.write('<H1> Tela inicial</H1>')

        res.write('<p> Um paragrafo da tela inicial </p>')

        res.end('</body></html>')
    }
    else if(req.url==='/alunos'){
        res.write('<html><body>')


        res.write('<H1> Lista de alunos</H1>')

        res.write('<ul><li>Aluno A</li><li>Aluno B</li><li>Aluno C</li><li>Aluno D</li><li>Aluno X</li><li>Aluno Y</li></ul>')


        res.end('</body></html>')
    }else if(req.url==='/loop'){
        res.write('<html><body>')

        res.write('<H1> Lista de alunos</H1>')
        res.write('<ul>')
        for (let index = 0; index < 100; index++) {
            res.write(`<li> Aluno ${index}</li>`)
        }
        res.write('</ul>')
    
        res.end('</body></html>')
    }
    else {

        res.write('<html><body>')

        res.write(`<H1> Tela inicial de ${req.url.substring(1)}</H1>`)

        res.write('<p> Um paragrafo da tela inicial </p>')

        res.end('</body></html>')
    }
    
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});