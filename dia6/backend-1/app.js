// LEMBRETE:  Executem a instalação do express ' npm install express cors '
const express =  require('express');
const cors =  require('cors');


const PORT = 3000;

var app = express();
app.use(cors());

app.listen(PORT , () => {
    console.log('Servidor escutando a port ' + PORT);
})


app.get( '', (req, res) => {
    res.write(" <html><body><h1>Pagina ABC Aprendiz</h1></body></html> ");
    res.end();
})



