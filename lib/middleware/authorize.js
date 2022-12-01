const Item = require("../models/Item");

module.exports = async (req, res, next) => {
  try {
    if (req.method === 'PUT') {
      const item = await Item.getById(req.params.id);
      if (req.uder.id !== item.user_id) {
        throw new Error('You do not have access to view this page');
      }
    }
    next();
  } catch (err) {
    err.status = 403;
    next(err);
  }
};
