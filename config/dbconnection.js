const mysql = require('mysql');
const fs = require('fs');

const connection = mysql.createConnection({
  host: '35.239.200.15',
  user: 'root',
  password: '1david',
  database: 'easy_credit',
  multipleStatements: true,
  ssl: {
    ca: fs.readFileSync(__dirname + '/certs/server-ca.pem'),
    key: fs.readFileSync(__dirname + '/certs/client-key.pem'),
    cert: fs.readFileSync(__dirname + '/certs/client-cert.pem')
}

});
 

module.exports={
    connection
}