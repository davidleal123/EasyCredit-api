var dbconn = require('../config/dbconnection');
const connect = dbconn;




function getPrueba(req, res) {
    const con = connect.connection;
    if(con){
      con.query('SELECT * FROM Empleados', (err,rows) => {
        if(err){
            res.status(500).send({mensaje: err});
        } else {
            res.status(200).send({response: rows});
        }
      });
    }
}
module.exports= {
    getPrueba
}