const { Sequelize } = require("sequelize");
const CustomerModel = require("./models/customer");

const sequelize = new Sequelize("postgres", "postgres", "2002", {
  host: "localhost",
  dialect: "postgres",
});

const Customer = CustomerModel(sequelize, Sequelize);

sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.error("Database synchronization error:", err);
  });

module.exports = {
  Customer,
};
