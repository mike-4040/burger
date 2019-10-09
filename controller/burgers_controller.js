const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => burger.all(data => res.render('index', { burgers: data })));

router.post('/api/burgers', (req, res) =>
  burger.create('burger_name', req.body.name, result => res.json({ id: result.insertId }))
);

router.put('/api/burgers/:id', (req, res) =>
  burger.update('devoured', req.body.devoured == 'true', req.params.id, result => {
    if (result.changedRows == 0) res.status(404).end();
    res.status(200).end();
  })
);

// Export routes for server.js to use.
module.exports = router;
