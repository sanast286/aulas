var empresas = [
    {
        "id": 1,
        "nome": "ABC Empresa",
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
        "nome": "ABC Empresa",
        "cidade": "São Bernardo do Campo",
        "Telefone": "9999-99999",
        "CNPJ": "00.000.000/0000-00"
    },
] 

//Empresas

const EmpresaController = {
    listar(req, res) {
        res.status(200).json(empresas);

    },

    obter(req, res) {
        const { id } = req.params;
        res.status(200).json(empresas.filter(empresa => empresa.id === parseInt(id)))
    },

    criar(req, res) {
        empresas.push(req.body)
        res.status(201).json(empresas)
    },
    apagar(req, res) {
        console.log("---")
        const { id } = req.params;
        empresas = empresas.filter(empresa => empresa.id !== id)
        res.json(empresas)

    }
}

module.exports = EmpresaController;
