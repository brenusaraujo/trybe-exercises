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

peopleRouter.post('/transactions', async (req, res) => {
  try {
    const transaction = req.body;

    const returnedTransaction = await peopleDb.insertTransaction(transaction);
    console.log(returnedTransaction);
    return res.status(201).json({ message: `transaction ${transaction}succesful made` });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: `${error.message}` });
  }
});

peopleRouter.get('/persons', async (_req, res) => {
  try {
    const [persons] = await peopleDb.list();
    if (persons) {
      return res.status(200).json(persons);
    } 
      return res.status(400).json({ message: 'person not found' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
});

peopleRouter.get('/persons/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [person] = await peopleDb.listById(id);
    if (person.length === 0) {
      return res.status(400).json({ message: 'person not found' });
    } 
    return res.status(200).json(person[0].first_name);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(error.message);
  }
});

peopleRouter.get('/transactions', async (_req, res) => {
  try {
    const transactions = await peopleDb.listTransactions();
    return res.status(200).json(transactions);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: `error: ${error.message}` });
  }
});

module.exports = peopleRouter;