// models
const Question = require('../models/Question.js');

class QuestionsServices {
  // list questions
  async getQuestions(req, res, next) {
    try {
      const questions = await Question.find({});
      res.json(questions);
    } catch (err) {
      next(err);
    }
  };

  // get question
  async getQuestion(req, res, next) {
    const { id } = req.params;

    try {
      const question = await Question.findById(id);
      res.json(question)
    } catch(err) {
      next(err);
    }
  };

  // create question
  async createQuestion(req, res, next) {
    const { body: newQuestion } = req;

    try {
      const questionCreated = new Question(newQuestion);
      await questionCreated.save();
      res.status(201).json(questionCreated);
    } catch(err) {
      next(err)
    }
  };

  // update question
  async updateQuestion(req, res, next) {
    const { id } = req.params;
    const { body: data } = req;

    try {
      const questionUpdated = await Question.findByIdAndUpdate(id, data, { new: true });
      res.json(questionUpdated);
    } 
    catch(err) {
      next(err)
    }
  };

  // delete question
  async deleteQuestion(req, res, next) {
    const { id } = req.params;

    try {
      await Question.findByIdAndDelete(id);
      res.status(204).end();
    } catch(err) {
      next(err);
    }
  }
};

module.exports = QuestionsServices;
