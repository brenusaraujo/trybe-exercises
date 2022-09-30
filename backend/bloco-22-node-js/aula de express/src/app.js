// vai agregar todos os arquyivos e rotas para exportar para o server.

const express = require('express');
const activities = require('./data/activities');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json(activities);
});

app.get('/activities/:id', (req, res) => {
  const idParams = req.params.id;

  const activity = activities.find(({ id }) => id === Number(idParams));
  res.status(200).json(activity);
});

app.post('/activities', (req, res) => {
  const activity = req.body;
  activities.push(activity);
  res.status(201).json(activity);
});

app.put('/activities/:id', (req, res) => {
  const idParams = req.params.id;
  const { status, description } = req.body;

  let newActivity = {};

  for (let index = 0; index < activities.length; index += 1) {
    const activity = activities[index];

    if (activity.id === Number(idParams)) {
      activity.description = description;
      activity.status = status;
      newActivity = activity;
    }
  }
  res.status(201).json(newActivity);
});

app.delete('/activities/:id', (req, res) => {
  const idParams = req.params.id;

  const indexActivity = activities.findIndex(({ id }) => id === Number(idParams));
  activities.splice(indexActivity, 1);
  res.status(204).json(activities);
});

module.exports = app;