const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const hbs = require('express-handlebars');

const path = require('path');
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

  // settings
  app.set("views", path.join(__dirname, "views"));
  app.engine(
    ".hbs",
    hbs({
      defaultLayout: "main",
      extname: ".hbs",
    })
  );
  app.set("view engine", ".hbs");

  // routes
  app.use('/api/questions', questionsRoutes);
  app.use('/api/quizzes', quizzesRoutes);
  app.use('/api/results', resultsRoutes);

  // home page
  app.get('/home', (req, res) => {
    res.render('home');
  })

  // redirect
  app.get('/', (req, res) => {
    res.redirect('/home');
  });

  return app
}

module.exports = createApp;
