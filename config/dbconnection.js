const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '35.239.200.15',
  user: 'root',
  password: '1david',
  database: 'easy_credit',
  multipleStatements: true

});


module.exports={
    connection
}