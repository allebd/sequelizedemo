import express, { json, urlencoded } from 'express';
import { config } from 'dotenv';
import logger from 'morgan';
import cors from 'cors';

config();

const { PORT } = process.env;
const app = express();

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());

// index route
app.get('/', (request, response) => {
  response.status(200).send('Testing Sequelize');
});

app.get('*', (requesst, response) => {
  response.status(404).send('Not Found');
});

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`); });

export default app;
