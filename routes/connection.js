var express = require('express');
var api = express.Router();

var connection = require('../controllers/connection');

/* GET users listing. */
api.get('/ConexionPrueba/', connection.getPrueba);

module.exports = api;
