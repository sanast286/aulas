const Musica = require('./musica')
//Musica

const MusicaController = {
    async listar(req, res) {
        try {
            const musicas = await Musica.findAll();
            return res.status(200).json(musicas);
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }

    },

    async obter(req, res) {
        try {
            const { id } = req.params;
            const musica = await Musica.findByPk(id);
      
            if (!musica) {
              return res.status(404).json({ error: 'musica não encontrada' });
            }
      
            return res.status(200).json(musica);
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }
    },

    async criar(req, res) {
        try {
            const musica = await Musica.create(req.body);
            return res.status(201).json(musica);
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }
    },
    async apagar(req, res) {
        try {
            const { id } = req.params;
            const deleted = await Musica.destroy({ where: { id: id } });
      
            if (deleted) {
              return res.status(204).send("Musica deletada com sucesso.");
            }
      
            throw new Error('Musica não encontrada');
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }
        

    }
}

module.exports = MusicaController;