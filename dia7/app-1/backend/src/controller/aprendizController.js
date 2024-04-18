
const Aprendiz = require('../model/aprendiz')
//Aprendizes

const AprendizController = {
    async listar(req, res) {
        try {
            const aprendizes = await Aprendiz.findAll();
            return res.status(200).json(aprendizes);
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }

    },

    async obter(req, res) {
        try {
            const { id } = req.params;
            const aprendiz = await Aprendiz.findByPk(id);
      
            if (!aprendiz) {
              return res.status(404).json({ error: 'Aprendiz não encontrado' });
            }
      
            return res.status(200).json(aprendiz);
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }
    },

    async criar(req, res) {
        try {
            const aprendiz = await Aprendiz.create(req.body);
            return res.status(201).json(aprendiz);
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }
    },
    async apagar(req, res) {
        try {
            const { id } = req.params;
            const deleted = await Aprendiz.destroy({ where: { id: id } });
      
            if (deleted) {
              return res.status(204).send("Aprendiz deletado com sucesso.");
            }
      
            throw new Error('Aprendiz não encontrado');
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }
        

    }
}

module.exports = AprendizController;
