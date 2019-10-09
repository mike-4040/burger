const connection = require('../config/connection.js');

const orm = {
  selectAll: function(table, cb) {
    const queryString = 'SELECT * FROM ??';
    connection.query(queryString, [table], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(table, col, val, cb) {
    const queryString = 'INSERT INTO ?? (??) VALUES (?)';
    connection.query(queryString, [table, col, val], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, col, val, id, cb) {
    const queryString = 'UPDATE ?? SET ?? = ? WHERE id = ?';
    connection.query(queryString, [table, col, val, id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
