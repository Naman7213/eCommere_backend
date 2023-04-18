const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "2002", {
  host: "localhost",
  dialect: "postgres",
});

const Customer = sequelize.define("User", {
  cid: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Customer;
