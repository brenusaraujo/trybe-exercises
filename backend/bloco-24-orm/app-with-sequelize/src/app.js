// src/app.js

const express = require('express');
const { userController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/user', userController.getAll);

module.exports = app;