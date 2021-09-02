const express = require('express');
const app = express();
const morgan = require('morgan');

const accountRoutes = require('./api/routes/accounts');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

// MIDDLEWARE
// Routes which handel requests
app.use('/accounts', accountRoutes);

// Catch all route
app.use((re, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error); //Forward the error request
});

// Handle errors thrown from anywhere else in the app
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
