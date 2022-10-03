const express = require('express');
const peopleDb = require('../db/peopleDb');

const peopleRouter = express.Router();

peopleRouter.post('/persons', async (req, res) => {
  try {
    const person = req.body;

    const [{ insertId }] = await peopleDb.insert(person);

    return res.status(201).json({ insertedId: insertId });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
});

peopleRouter.get('/persons', async (_req, res) => {
  try {
    const [persons] = await peopleDb.consult();

    return res.status(200).json(persons);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
});

module.exports = peopleRouter;