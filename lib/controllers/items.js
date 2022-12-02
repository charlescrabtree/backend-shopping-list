const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const Item = require('../models/Item');


module.exports = Router()
  .post ('/', authenticate, async (req, res, next) => {
    try {
      const newItem = await Item.insert({ ...req.body, user_id: req.user.id });
      res.json(newItem);
    } catch (err) {
      next(err);
    }
  })
  .get('/', authenticate, async (req, res, next) => {
    try {
      const list = await Item.getAll(req.user.id);
      res.json(list);
    } catch (e) {
      next(e);
    }
  });

// TO DO - implement items CRUD
