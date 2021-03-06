const service = require('./service');

module.exports = {
  register: async (req, res, next) => {
    const information = req.body;
    try {
      const response = await service.createOne(information);
      if (response === false) {
        res.sendStatus(409);
      }
      res.send();
    } catch (err) {
      next(err);
    }
  },
};
