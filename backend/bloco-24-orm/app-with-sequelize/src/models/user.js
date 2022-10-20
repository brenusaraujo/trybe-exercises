// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, 
  {
    underScored: true,
    tableName: 'users',
  });

  return User;
};

module.exports = UserModel;