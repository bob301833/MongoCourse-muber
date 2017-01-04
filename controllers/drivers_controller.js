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
  },

  edit(req, res, next) {
    const driverId = req.params.id;
    const driverProps = req.body;
    Driver.findByIdAndUpdate(driverId, driverProps)
      .then(() => Driver.findById(driverId))
      .then(driver => res.send(driver))
      .catch(next);
  }
};
