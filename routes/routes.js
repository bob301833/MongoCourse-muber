import DriversController from '../controllers/drivers_controller';

export default (app) => {
  app.get('/api', DriversController.greeting);
};
