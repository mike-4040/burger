const orm = require('../config/orm.js');

const burgers = {
  all: function(cb) {
    orm.selectAll('burgers', res => cb(res));
  },
  create: function(col, val, cb) {
    orm.insertOne('burgers', col, val, res => cb(res));
  },
  update: function(col, val, id, cb) {
    orm.updateOne('burgers', col, val, id, (res = cb(res)));
  }
};

module.exports = burgers;
