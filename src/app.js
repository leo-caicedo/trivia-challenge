const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');

const swaggerDoc = require('./swagger.json');
// required routes
const questionsRoutes = require('./quizzes/routes/questions.routes.js');
const quizzesRoutes = require('./quizzes/routes/quizzes.routes.js');
const resultsRoutes = require('./quizzes/routes/results.routes.js');

const createApp = () => {
  const app = express();

  // middleware
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));

  // routes
  app.use('/api/questions', questionsRoutes);
  app.use('/api/quizzes', quizzesRoutes);
  app.use('/api/results', resultsRoutes);
  // documentation
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

  // redirect
  app.get('/', (req, res) => {
    res.redirect('/api/quizzes');
  });

  return app
}

module.exports = createApp;
