// models
const Result = require('../models/Result.js');

class ResultsServices {
  // list results
  async getResults(req, res, next) {
    try {
      const results = await Result.find({})
	.populate('quiz_id', { result: 0 })
        .populate('responses.question_id', { _id: 0 })
        .exec();
      res.json(results);
    } catch (err) {
      next(err);
    }
  };

  // get result
  async getResult(req, res, next) {
    const { id } = req.params;

    try {
      const result = await Result.findById(id)
        .populate('quiz_id')
        .populate('responses.question_id')
        .exec();
      res.json(result)
    } catch(err) {
      next(err);
    }
  };

  // create result
  async createResult(req, res, next) {
    const { body: newResult } = req;

    try {
      const resultCreated = new Result(newResult);
      await resultCreated.save();

      // returns the answers to each question and the user's answers
      const result = await Result.findById(resultCreated._id)
        .populate('quiz_id', { results: 0 })
        .populate('responses.question_id', { _id: 0 })
        .exec();
      res.status(201).json(result);
    } catch(err) {
      next(err)
    }
  };

  // update result
  async updateResult(req, res, next) {
    const { id } = req.params;
    const { body: data } = req;

    try {
      const resultUpdated = await Result.findByIdAndUpdate(id, data, { new: true });
      res.json(resultUpdated);
    } 
    catch(err) {
      next(err)
    }
  };

  // delete result
  async deleteResult(req, res, next) {
    const { id } = req.params;

    try {
      await Result.findByIdAndDelete(id);
      res.status(204).end();
    } catch(err) {
      next(err);
    }
  }
};

module.exports = ResultsServices;
