const Paciente = require('../model/paciente')
//Pacientes

const PacienteController = {
    async listar(req, res) {
        try {
            const pacientes = await Paciente.findAll();
            return res.status(200).json(pacientes);
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }

    },

    async obter(req, res) {
        try {
            const { id } = req.params;
            const paciente = await Paciente.findByPk(id);
      
            if (!paciente) {
              return res.status(404).json({ error: 'Paciente não encontrado' });
            }
      
            return res.status(200).json(paciente);
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }
    },

    async criar(req, res) {
        try {
            const paciente = await Paciente.create(req.body);
            return res.status(201).json(paciente);
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }
    },
    async apagar(req, res) {
        try {
            const { id } = req.params;
            const deleted = await Paciente.destroy({ where: { id: id } });
      
            if (deleted) {
              return res.status(204).send("Paciente deletado com sucesso.");
            }
      
            throw new Error('Paciente não encontrado');
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }
        

    }
}

module.exports = PacienteController;