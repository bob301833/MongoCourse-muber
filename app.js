import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';

const app = express();

app.use(bodyParser.json());
routes(app);

export default app;
