// src/app.js
const express = require('express');

const teams = [
  {
    id: 1,
    name: 'Esporte Clube Bahia',
    initials: 'ECB',
  },
  {
    id: 2,
    name: 'Esporte Clube Vitória',
    initials: 'ECV',
  },
  {
    id: 3,
    name: 'Fortaleza Esporte Clube',
    initials: 'FEC',
  },
];

const app = express();

app.use(express.json());

app.get('/teams', (req, resp) => {
  resp.status(200).json({ teams });
});

app.post('/teams', (req, resp) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  resp.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;
  let updatedTeam;

  for (let i = 0; i < teams.length; i += 1) {
    const team = teams[i];

    if (team.id === Number(id)) {
      team.name = name;
      team.initials = initials;
      updatedTeam = team;
    }
  }

  res.status(200).json({ updatedTeam });
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = app;