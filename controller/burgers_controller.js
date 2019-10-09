const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get('/', function(req, res) {
  burger.all(function(data) {
    const hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', function(req, res) {
  burger.create('burger_name', req.body.name, result => res.json({ id: result.insertId }));
});

router.put('/api/burgers/:id', function(req, res) {
  burger.update('devoured', req.body.devoured, req.params.id, function(result) {
    if (result.changedRows == 0) res.status(404).end();
    else res.status(200).end();
  });
});

// Export routes for server.js to use.
module.exports = router;
