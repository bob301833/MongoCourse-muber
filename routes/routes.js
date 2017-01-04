import DriversController from '../controllers/drivers_controller';

export default (app) => {
  app.get('/api', DriversController.greeting);

  app.post('/api/drivers', DriversController.create);

  app.put('/api/drivers/:id', DriversController.edit);

  app.delete('/api/drivers/:id', DriversController.delete);

  app.get('/api/drivers', DriversController.index);
};
