const connection = require('../config/connection.js');

const orm = {
  selectAll: function(table, cb) {
    const queryString = `SELECT * FROM ${table};`;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(table, col, val, cb) {
    const queryString = `INSERT INTO (${col}) ${table} VALUES (?);`;
    connection.query(queryString, val, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, col, val, id, cb) {
    const queryString = `UPDATE ${table} SET ?? = ? WHERE id = ?`;

    console.log(queryString);
    connection.query(queryString, [col, val, id], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
