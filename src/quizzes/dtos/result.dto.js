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
  body('responses.question_id')
    .exists({ checkFalsy: false })
    .withMessage('Question_id is required'),
  body('responses.my_response')
    .exists({ checkFalsy: false })
    .withMessage('my_response is required')
    .isBoolean()
    .withMessage('my_response must be a boolean')
]

module.exports = resultDto
