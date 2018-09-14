var express = require('express');
var api = express.Router();

var solicitud = require('../controllers/solicitudController');

/* GET users listing. */
api.post('/nuevaSolicitud/', solicitud.crearSolicitud);
api.get('/historial/:userid', solicitud.getHistorial)
api.get('/solicitudes/:userid', solicitud.getSolicitudes)
api.put('/aceptarSolicitud/', solicitud.putAceptarSolicitud )
api.put('/negarSolicitud/', solicitud.putNegarSolicitud )

module.exports = api;
