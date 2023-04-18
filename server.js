const express = require("express");
const { Sequelize } = require("sequelize");
const CustomerRoutes = require("./routes/customerroutes");

const app = express();
const port = 5000;

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up database connection
const sequelize = new Sequelize("postgres", "postgres", "2002", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

// Set up routes
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.get("/customer",CustomerRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
