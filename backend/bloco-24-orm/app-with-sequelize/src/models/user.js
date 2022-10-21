// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  }, 
  {
    underScored: true,
    tableName: 'users',
    timestamps: false,
  });

  return User;
};

module.exports = UserModel;