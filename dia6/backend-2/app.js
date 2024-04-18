// LEMBRETE:  Executem a instalação do express ' npm install express cors '
const express =  require('express');



const PORT = 4001;

var app = express();
app.use(express.json());


app.listen(PORT , () => {
    console.log('Servidor escutando a port ' + PORT);
})

var aprendizes = [

    {
        "id": 1,
        "nome": "Emerson",
        "cidade": "Santo André"
    },
    {
        "id": 2,
        "nome": "Joao",
        "cidade": "Santo André"
    },
    {
        "id": 3,
        "nome": "Maria",
        "cidade": "Santos"
    }
]



app.get( '', (req, res) => {
    res.status(200).json(aprendizes);
    
})

app.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json(aprendizes.filter( aprendiz => aprendiz.id === parseInt(id) ))
})



app.post('', (req, res) => {
    
    
    aprendizes.push(req.body)
    res.status(201).json(aprendizes)
})



