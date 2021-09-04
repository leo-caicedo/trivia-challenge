const { Schema, model } = require('mongoose');

const quizSchema = new Schema(
    {
    name: {
        type: String,
        required: true
    },
    response_code: Number,
    results: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        },
    ],
}, {
    versionKey: false
}
);

module.exports = model('Quiz', quizSchema);
