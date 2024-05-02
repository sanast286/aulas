const express =  require('express');
const musicaController = require('./musicacontroller')
const router = express.Router();
//musica
router.get( '/musica',musicaController.listar)
router.get('/musica/:id',musicaController.obter)
router.post('/musica',musicaController.criar)
router.delete('/musica/:id', musicaController.apagar)
