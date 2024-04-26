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
    
    },

    async obter(req, res) {
       try {
        const { id } = req.params;
        const empresa = await Empresa.findByPK(id); 
    
     if (!empresa) {
        return res.status(404). json({ error: 'empresa não encontrado' });
    }
   
     return res.status(200).json(empresa);
    } catch (error) {
    return res.status(400).json({ error: error.menssage });
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
            const deleted = await empresa.destroy({ where: { id: id } });
      
            if (deleted) {
              return res.status(204).send("empresa deletado com sucesso.");
            }
      
            throw new Error('empresa não encontrado');
          } catch (error) {
            return res.status(400).json({ error: error.message });
          }
        

        }
    }


module.exports = EmpresaController;
