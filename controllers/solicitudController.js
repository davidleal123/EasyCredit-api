var dbconn = require('../config/dbconnection');
const connect = dbconn;

function crearSolicitud(req, res) {
    const solicitud = req.body;
    const con = connect.connection;
    if (con) {
        con.query("call nuevaSolicitud(" + solicitud.userid + ",'" + solicitud.cantidad + "'," + solicitud.plazo + ")", (err, rows) => {
            if (err) {
                res.status(500).send({ mensaje: err });
            } else {
                res.status(200).send({ response: rows });
            }
        });
    }
}


//Historial, solicitudes, aceptarsolicitud, negarSolicitud

function getHistorial(req, res) {
    const userid = req.params.userid;
    const con = connect.connection;
    if (con) {
        con.query("call historial(" + userid + ")", (err, rows) => {
            if (err) {
                res.status(500).send({ mensaje: err });
            } else {
                res.status(200).send({ response: rows });
            }
        });
    }
}

function getSolicitudes(req, res) {
    const userid = req.params.userid;
    const con = connect.connection;
    if (con) {
        con.query("call Solicitudes(" + userid + ")", (err, rows) => {
            if (err) {
                res.status(500).send({ mensaje: err });
            } else {
                res.status(200).send({ response: rows });
            }
        });
    }
}

function putAceptarSolicitud(req, res) {
    const idsolicitud = req.body.idsolicitud;
    const con = connect.connection;
    if (con) {
        con.query("call aceptarSolicitud(" + userid + ")", (err, rows) => {
            if (err) {
                res.status(500).send({ mensaje: err });
            } else {
                res.status(200).send({ response: rows });
            }
        });
    }
}

function putNegarSolicitud(req, res) {
    const idsolicitud = req.body.idsolicitud;
    const con = connect.connection;
    if (con) {
        con.query("call negarSolicitud(" + userid + ")", (err, rows) => {
            if (err) {
                res.status(500).send({ mensaje: err });
            } else {
                res.status(200).send({ response: rows });
            }
        });
    }
}

module.exports = {
    crearSolicitud,
    getHistorial,
    getSolicitudes,
    putAceptarSolicitud,
    putNegarSolicitud
}