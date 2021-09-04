const { body } = require('express-validator');

const resultDto = [
  // email
  body('email')
    .exists({ checkFalsy: false })
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email'),
  // quiz
  body('quiz_id')
    .exists({ checkFalsy: false })
    .withMessage('Quiz_id is required'),
  // responses
  body('responses')
    .exists({ checkFalsy: false })
    .withMessage('Responses is required'),
]

module.exports = resultDto
