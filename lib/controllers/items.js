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
  });
// TO DO - implement items CRUD
