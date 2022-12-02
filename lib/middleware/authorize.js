const Item = require('../models/Item');

module.exports = async (req, res, next) => {
  try {
    if (req.method === 'PUT') {
      const item = await Item.getById(req.params.id);
      if (req.user.id !== item.user_id) {
        throw new Error('You do not have access to view this page');
      }
    }
    if (req.method === 'DELETE') {
      const item = await Item.getById(req.params.id);
      if (req.user.id !== item.user_id) {
        throw new Error('You cannot delete this item');
      }
    }
    next();
  } catch (err) {
    err.status = 403;
    next(err);
  }
};
