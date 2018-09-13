var dbconn = require('../config/dbconnection');
const connection = dbconn.connection;




function getPrueba(req, res) {
    connection.connect((err) => {
        if (err) {
            throw err;
        }
    
        console.log('Connected!');
        connection.end((err) => {
            // The connection is terminated gracefully
            // Ensures all previously enqueued queries are still
            // before sending a COM_QUIT packet to the MySQL server.
          });
        res.status(200).send({mensaje: "conectado"});
      });
}
module.exports= {
    getPrueba
}