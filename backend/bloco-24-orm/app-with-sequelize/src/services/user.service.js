// src/services/user.service.js

const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll();
  console.log(users);
  return users;
};

module.exports = {
  getAll,
};