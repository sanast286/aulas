const express =  require('express');
const AprendizController = require('./aprendiz')
const EmpresaController = require('./empresa')
const router = express.Router();

//Aprendiz
router.get( '/aprendiz', AprendizController.listar)
router.get('/aprendiz/:id',AprendizController.obter)
router.post('/aprendiz',AprendizController.criar)
router.delete("/aprendiz/:id ", AprendizController.apagar)

//Empresas
router.get( '/empresa', EmpresaController.listar)
router.get('/empresa/:id',EmpresaController.obter)
router.post('/empresa',EmpresaController.criar)
router.delete("/empresa/:id ", EmpresaController.apagar)



module.exports = router;