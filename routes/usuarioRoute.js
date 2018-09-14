var express = require('express');
var api = express.Router();

var usuario = require('../controllers/usuarioController');

/* GET users listing. */
api.post('/crearUsuario/', usuario.crearUsuario);
api.put('/deleteUsuario/', usuario.deleteUsuario);
api.put('/editUsuario/', usuario.editUsuario);
api.get('/getUsuario/:nombre', usuario.getUsuario);


module.exports = api;
