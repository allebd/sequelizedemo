import express, { json, urlencoded } from 'express';
import { config } from 'dotenv';
import logger from 'morgan';
import cors from 'cors';
import models from './models';

const task = models.Task.build({
  title: 'feed the dog',
  iscompleted: false,
});

// delete the task
// models.Task.destroy({
//   where: {
//     title: 'mow the lawn',
//   },
// }).then((task) => {

// });

models.Task.findAll().then((task) => {
  const [Task] = task;
  const { title } = Task;
  console.log(title);
});

// saving a new task
task.save().then((newTask) => {
  console.log(newTask);
});

// models.Task.findByPk(30).then((task) => {
//   console.log(task);
// });

//  fetch a particular task
// models.Task.findOne({
//   where: {
//     title: 'mow the land',
//   },
// }).then((task) => {
//   console.log(task);
// });

//  Plain findOne method with no filter
// models.Task.findOne().then((task) => {
//   console.log(task);
// });

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

app.get('*', (request, response) => {
  response.status(404).send('Not Found');
});

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`); });

export default app;
