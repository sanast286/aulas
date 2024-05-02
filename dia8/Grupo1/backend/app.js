// LEMBRETE:  Executem a instalação das dependencias ' npm install express cors sqlite3 sequelize  '
const express =  require('express')
const sequelize = require('./src/sequelize')
const router = require('.,/src/rotas')


const PORT = 4001;

var app = express();
app.use(express.json());
app.use(router)



app.listen(PORT , async () => {
    await sequelize.sync(); // Cria as tabelas no banco de dados, se não existirem
    console.log('Servidor escutando a port ' + PORT);
})
