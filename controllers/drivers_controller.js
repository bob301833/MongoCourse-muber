import Driver from '../models/driver';

export default {
  greeting(req, res) {
    res.send({ hi: 'there' });
  },

  create(req, res, next) {
    const driverProp = req.body;
    Driver.create(driverProp)
      .then(driver => res.send(driver))
      .catch(next);
  }
};
