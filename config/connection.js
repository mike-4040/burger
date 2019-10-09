const mysql = require('mysql');

const localSQL = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'burger_db'
};

const connection = mysql.createConnection(process.env.JAWSDB_URL || localSQL);

connection.connect(err => {
  if (err) return console.error('error connecting: ' + err.stack);
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
