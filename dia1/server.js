const http = require('http')

http.createServer((req, res) => {
    res.end('Boa noite ABC Aprendiz!!!!')
}).listen(4000, () => {
    console.log('Servidor esta rodando!!')
})