const { body } = require('express-validator');

const quizDto = [
  // quiz name
  body('name')
    .exists({ checkFalsy: false })
    .withMessage('Quiz name is required')
    .isString()
    .withMessage('Quiz name must be a string'),
]

module.exports = quizDto;
