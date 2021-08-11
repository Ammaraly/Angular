const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("Simple Middleware");
  next();
})

app.use((req, res, next) => {
  res.send("Express server")
})

module.exports = app;
