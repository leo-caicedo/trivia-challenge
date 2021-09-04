const { body } = require('express-validator');

const quizDto = [
  // quiz name
  body('name')
    .exists({ checkFalsy: false })
    .withMessage('Quiz name is required')
    .isString()
    .withMessage('Quiz name must be a string'),
  // response_code
  body('response_code')
    .isInt()
    .withMessage('Response code must be a integer'),
]

module.exports = quizDto;
