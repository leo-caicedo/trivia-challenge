// models
const Quiz = require('../models/Quiz.js');
const Question = require('../models/Question.js');

class QuizzesServices {
  // list quizzes
  async getQuizzes(req, res, next) {
    try {
      const quizzes = await Quiz.find({}).populate('results');
      res.json(quizzes);
    } catch (err) {
      next(err);
    }
  };

  // get quiz
  async getQuiz(req, res, next) {
    const { id } = req.params;

    try {
      const quiz = await Quiz.findById(id).populate('results');
      res.json(quiz)
    } catch(err) {
      next(err);
    }
  };

  // create quiz
  async createQuiz(req, res, next) {
    const { name } = req.body;

    // create random questions
    const questionsList = await Question.find({});
    const questionIds = questionsList.map((question) => question._id);
    questionIds.sort(() => Math.random() > 0.5 ? 1 : -1);
    const randomQuestions = questionIds.slice(0, 10); // take ten questions


    try {
      const quizCreated = new Quiz({
	name,
	results: randomQuestions,
      });
      await quizCreated.save();
      const quiz = await Quiz.findById(quizCreated._id).populate('results');
      res.status(201).json(quiz);
    } catch(err) {
      next(err)
    }
  };

  // update quiz
  async updateQuiz(req, res, next) {
    const { id } = req.params;
    const { body: data } = req;

    try {
      const quizUpdated = await Quiz.findByIdAndUpdate(id, data, { new: true });
      res.json(quizUpdated);
    } 
    catch(err) {
      next(err)
    }
  };

  // delete quiz
  async deleteQuiz(req, res, next) {
    const { id } = req.params;

    try {
      await Quiz.findByIdAndDelete(id);
      res.status(204).end();
    } catch(err) {
      next(err);
    }
  }
};

module.exports = QuizzesServices;
