// LEMBRETE:  Executem a instalação do express ' npm install express cors '
const express =  require('express');
const cors =  require('cors');


const PORT = 4001;

var app = express();
app.use(express.json);


app.listen(PORT , () => {
    console.log('Servidor escutando a port ' + PORT);
})


var aprendizes = []

app.get( '', (req, res) => {
    res.status(200).json(aprendizes);
    
})



app.post('', (req, res) => {
    
    console.log(req)
    aprendizes.push(req.body)
    res.status(201).json(aprendizes)
})