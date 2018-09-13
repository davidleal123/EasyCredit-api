const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '1david',
  database: 'easy_credit'
});


module.exports={
    connection
}