const { Schema, model } = require('mongoose');

const questionSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        default: 'medium'
    },
    category: {
        type: String,
        required: true
    },
    correct_answer: {
        type: Boolean,
        required: true
    },
    incorrect_answer: Boolean,
}, {
    versionKey: false
});

module.exports = model('Question', questionSchema);
