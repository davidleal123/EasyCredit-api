var dbconn = require('../config/dbconnection');
const connect = dbconn;




function crearUsuario(req, res) {
    const user = req.body;
    const con = connect.connection;
    var resp = [];
    if(con){
        
      con.query("call BuscarUsuario('"+user.nombre+"')", (err,rows) => {
        if(err){
            res.status(500).send({mensaje: err});
        } else {
            resp = rows[0];
            console.log(resp);
            console.log(resp.length);
            if(resp.length > 0){
                res.status(500).send({mensaje:"Este usuario ha sido creado antes, intente de nuevo con un usuario diferente"});
                return;
            }
        }
      });
    }
    if(resp.length > 0){
        return res.status(500).send({mensaje:"Este usuario ha sido creado antes, intente de nuevo con un usuario diferente"});
    }else {
        if(con){
            con.query("call guardarUsuario('"+user.nombre+"')", (err,rows) => {
              if(err){
                  res.status(500).send({mensaje: err});
              } else {
                res.status(200).send({mensaje: rows});
            }
            });
          }
    }
}

function getUsuario(req, res) {
    const nombre = req.params.nombre;
    const con = connect.connection;
    if(con){
      con.query("call BuscarUsuario('"+nombre+"')", (err,rows) => {
        if(err){
            res.status(500).send({mensaje: err});
        } else {
            res.status(200).send({response: rows});
        }
      });
    }
}

function editUsuario(req, res) {
    const user = req.body;
    const con = connect.connection;
    if(con){
      con.query("call editarUsuario("+user.userid+",'"+ user.nombre+"')", (err,rows) => {
        if(err){
            res.status(500).send({mensaje: err});
        } else {
            res.status(200).send({response: rows});
        }
      });
    }
}

function deleteUsuario(req, res) {
    const userid = req.body.userid;
    const con = connect.connection;
    if(con){
      con.query("call eliminarUsuario("+userid+")", (err,rows) => {
        if(err){
            res.status(500).send({mensaje: err});
        } else {
            res.status(200).send({response: rows});
        }
      });
    }
}
module.exports= {
    crearUsuario,
    getUsuario,
    editUsuario,
    deleteUsuario
}