const Empresa = require('../model/empresa')
 
//Empresas

const EmpresaController = {
    async listar(req, res) {
    try {
        const empresas = await Empresa.findAll();
        return res.status(200).json(empresas);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    }
,
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
