// LEMBRETE:  Executem a instalação do express ' npm install express cors '
const express =  require('express');
const router = require('./src/rotas')


const PORT = 4001;

var app = express();
app.use(express.json());
app.use(router)


app.listen(PORT , () => {
    console.log('Servidor escutando a port ' + PORT);
})
