const { Router } = require('express');
const Item = require('../models/Item');
const authenticate = require('../middle/authenticate');

module.exports = Router()
  .post ('/', authenticate, async (req, res, next) => {
    try {
      const newItem = await Item.insert({ ...req.body, user_id: req.user.id });
      res.json(newItem);
    } catch (err) {
      next(err);
    }
  });
// TO DO - implement items CRUD
