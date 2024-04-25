const express =  require('express');
const PacienteController = require('./controller/pacienteController')
//const HospitalController = require('./controller/hospitalController')
const router = express.Router();

//Pacientes
router.get( '/paciente', PacienteController.listar)
router.get('/paciente/:id',PacienteController.obter)
router.post('/paciente',PacienteController.criar)
router.delete('/paciente/:id', PacienteController.apagar)

//Hospitais
/*
router.get( '/hospital', HospitalController.listar)
router.get('/hospital/:id',HospitalController.obter)
router.post('/hospital',HospitalController.criar)
router.delete('/hospital/:id', HospitalController.apagar)
*/


module.exports = router;