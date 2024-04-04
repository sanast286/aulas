
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

//Aprendizes

const AprendizController = {
    listar(req, res) {
        res.status(200).json(aprendizes);

    },

    obter(req, res) {
        const { id } = req.params;
        res.status(200).json(aprendizes.filter(aprendiz => aprendiz.id === parseInt(id)))
    },

    criar(req, res) {
        aprendizes.push(req.body)
        res.status(201).json(aprendizes)
    },
    apagar(req, res) {
        console.log("---")
        const { id } = req.params;
        aprendizes = aprendizes.filter(aprendiz => aprendiz.id !== id)
        res.json(aprendizes)

    }
}

module.exports = AprendizController;
