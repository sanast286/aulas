// LEMBRETE:  Executem a instalação do express ' npm install express cors '
const express =  require('express');
const cors =  require('cors');


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

var empresas = [
    {
        "id": 1,
        "nome": "ABC Aprendiz",
        "cidade": "Santo André",
        "Telefone": "9999-99999",
        "CNPJ": "00.000.000/0000-00"
    },
    {
        "id": 2,
        "nome": "Empresa XYZ",
        "cidade": "São Caetano do Sul",
        "Telefone": "9999-99999",
        "CNPJ": "00.000.000/0000-00"
    },
    {
        "id": 3,
        "nome": "ABC Aprendiz",
        "cidade": "São Bernardo do Campo",
        "Telefone": "9999-99999",
        "CNPJ": "00.000.000/0000-00"
    },
] 

//Aprendizes
app.get( '/aprendiz', (req, res) => {
    res.status(200).json(aprendizes);
    
})

app.get('/aprendiz/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json(aprendizes.filter( aprendiz => aprendiz.id === parseInt(id) ))
})

app.post('/aprendiz', (req, res) => {
    aprendizes.push(req.body)
    res.status(201).json(aprendizes)
})

app.delete("/aprendiz/:id ", (req, res) => {
    console.log("---")
    const { id } = req.params;
    aprendizes = aprendizes.filter(aprendiz => aprendiz.id !== id)
    res.json(aprendizes)

})

//Empresas
app.get( '/empresa', (req, res) => {
    res.status(200).json(empresas);
    
})

app.get('/empresa/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).json(empresas.filter( empresa => empresa.id === parseInt(id) ))
})

app.post('/empresa', (req, res) => {
    empresas.push(req.body)
    res.status(201).json(empresas)
})

app.delete("/empresa/:id ", (req, res) => {
    console.log("---")
    const { id } = req.params;
    empresas = empresas.filter(empresa => empresa.id !== id)
    res.json(empresas)

})


