// src/app.js
const express = require('express');

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

const app = express();

app.use(express.json());

app.get('/myActivities/:id', (req, resp) => {
  const { id } = req.params;
  const { description, status } = req.body;
  console.log(description);
  
  resp.status(200).find((activity) => activity.id === Number(id));
});

app.get('/myActivities/', (req, resp) => {
  // let updatedActivity;

  // for (let index = 0; index < activities.length; index += 1) {
  //   const activity = activities[index];
    
  //   if (activity.id === Number(id)) {
  //     activity.description = description;
  //     activity.status = status;
  //     updatedActivity = activity;
  //   }
  // }
    resp.status(200).json({ activities });
});

app.get('/filter/myActivities', (req, resp) => {
  resp.status(200).json({ activities });
});

module.exports = app;