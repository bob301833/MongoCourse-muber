import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './routes/routes';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/muber');

const app = express();

app.use(bodyParser.json());
routes(app);

export default app;
