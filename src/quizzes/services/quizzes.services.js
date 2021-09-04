// models
const Quiz = require('../models/Quiz.js');

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
    const { body: newQuiz } = req;

    try {
      const quizCreated = new Quiz(newQuiz);
      await quizCreated.save();
      res.status(201).json(quizCreated);
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
