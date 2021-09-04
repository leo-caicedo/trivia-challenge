const express = require('express');
const morgan = require('morgan')

const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());
  app.use(morgan('dev'));

  return app
}

module.exports = createApp;
