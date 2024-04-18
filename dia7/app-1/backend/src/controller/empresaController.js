const Empresa = require('../model/empresa')
 
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
