const { Schema, model } = require('mongoose');

const resultSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    quiz_id: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true,
    },
    responses : [
        {
            question_id: {
                type: Schema.Types.ObjectId,
                ref: 'Question',
	        required: true
            },
            my_response: {
                type: Boolean,
                required: true
            }
        },
    ]
}, {
    versionKey: false
});

module.exports = model('Result', resultSchema);
