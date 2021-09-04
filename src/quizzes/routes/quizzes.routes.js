const { Router } = require('express');

// services
const QuizzesServices = require('../services/quizzes.services.js');
const quizzesServices = new QuizzesServices;
// dtos
const quizDto = require('../dtos/quiz.dto.js')
// middleware
const validationDto = require('../../middleware/validateDto.js')

const router = Router();

router.get('/', quizzesServices.getQuizzes);
router.get('/:id', quizzesServices.getQuiz);
router.post('/', [quizDto, validationDto], quizzesServices.createQuiz);
router.put('/:id', quizzesServices.updateQuiz);
router.delete('/:id', quizzesServices.deleteQuiz);

module.exports = router;
