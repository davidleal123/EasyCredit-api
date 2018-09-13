var dbconn = require('../config/dbconnection');
const connection = dbconn.connection;




function getPrueba(req, res) {
    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
        res.status(200).send({mensaje: "conectado"});
      });
}
module.exports= {
    getPrueba
}