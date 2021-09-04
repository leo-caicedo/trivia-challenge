const express = require('express');
const morgan = require('morgan');

// required routes
const questionsRoutes = require('./quizzes/routes/questions.routes.js');
const quizzesRoutes = require('./quizzes/routes/quizzes.routes.js');
const resultsRoutes = require('./quizzes/routes/results.routes.js');

const createApp = () => {
  const app = express();

  // middleware
  app.use(express.json());
  app.use(morgan('dev'));

  // routes
  app.use('/api/questions', questionsRoutes);
  app.use('/api/quizzes', quizzesRoutes);
  app.use('/api/results', resultsRoutes);

  return app
}

module.exports = createApp;
