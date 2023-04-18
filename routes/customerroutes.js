const express = require("express");
const router = express.Router();
const { Customer } = require("../db");

router.post("/", (req, res) => {
  const customer = {
    cid: req.body.cid,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    password: req.body.password,
  };

  Customer.create(customer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    });
});

module.exports = app;
