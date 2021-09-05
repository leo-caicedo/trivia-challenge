const { body } = require('express-validator');

// models
const Quiz = require('../models/Quiz.js')

const quizDto = [
  // quiz name
  body('name')
    .exists({ checkFalsy: false })
    .withMessage('Quiz name is required')
    .isString()
    .withMessage('Quiz name must be a string')
  .custom((name) => {
    return Quiz.findOne({ name }).then((quiz) => {
      if (quiz) return Promise.reject('Quiz name already in use');
    });
  }),
]

module.exports = quizDto;
