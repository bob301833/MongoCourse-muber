import express from 'express';
import routes from './routes/routes';

const app = express();

routes(app);

export default app;
