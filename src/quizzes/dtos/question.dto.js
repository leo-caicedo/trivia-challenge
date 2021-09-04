const { body } = require('express-validator');

const questionDto = [
  // question
  body('question')
    .exists({ checkFalsy: false })
    .withMessage('Question is required'),
  // category
  body('category')
    .exists({ checkFalsy: false })
    .withMessage('Category is required'),
  // answers
  body('correct_answer')
    .exists({ checkFalsy: false })
    .withMessage('Correct answer is required')
    .isBoolean().withMessage('Answer must be a boolean'),
];

module.exports = questionDto;
