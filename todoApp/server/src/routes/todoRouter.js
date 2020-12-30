/* eslint-disable func-names */
const express = require('express');
const todoService = require('../models/todoService');

module.exports = function (app) {
  const router = express.Router();
  app.use('/api', router);

  todoService.register(router, '/todos');
};
