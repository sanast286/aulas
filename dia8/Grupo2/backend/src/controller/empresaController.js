const Empresa = require('../model/empresa')
//empresa 

const EmpresaController = {
    async listar(req, res) {
        try {
            const empresas = await Empresa.findAll();
            return res.status(200).json(empresas);
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }

    },

    async obter(req, res) {
        try {
            const { id } = req.params;
            const empresa = await Empresa.findByPk(id);
      
            if (!empresa) {
              return res.status(404).json({ error: 'Empresa não encontrada' });
            }
      
            return res.status(200).json(empresa);
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }
    },

    async criar(req, res) {
        try {
            const empresa = await Empresa.create(req.body);
            return res.status(201).json(empresa);
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }
    },
    async apagar(req, res) {
        try {
            const { id } = req.params;
            const deleted = await Empresa.destroy({ where: { id: id } });
      
            if (deleted) {
              return res.status(204).send("Empresa deletada com sucesso.");
            }
      
            throw new Error('Empresa não encontrada');
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }
        

    }
}
module.exports = EmpresaController;