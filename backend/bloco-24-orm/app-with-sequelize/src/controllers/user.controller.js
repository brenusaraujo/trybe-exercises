// src/controllers/user.controller.js

const { userService } = require("../services");



const getAll = async (_req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
};