const { Router } = require('express');

// services
const QuestionsServices = require('../services/questions.services.js');
const questionsServices = new QuestionsServices;
// dtos
const questionDto = require('../dtos/question.dto.js')
// middleware
const validationDto = require('../../middleware/validateDto.js')

const router = Router();

router.get('/', questionsServices.getQuestions);
router.get('/:id', questionsServices.getQuestion);
router.post('/', [questionDto, validationDto], questionsServices.createQuestion);
router.put('/:id', questionsServices.updateQuestion);
router.delete('/:id', questionsServices.deleteQuestion);

module.exports = router;
