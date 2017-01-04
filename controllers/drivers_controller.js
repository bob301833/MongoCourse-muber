import Driver from '../models/driver';

export default {
  greeting(req, res) {
    res.send({ hi: 'there' });
  },

  create(req, res) {
    const driverProp = req.body;
    Driver.create(driverProp)
      .then(driver => res.send(driver));
  }
};
