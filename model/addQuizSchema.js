const mongoose = require("mongoose");

const addQuizSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true,
    },
    option1: {
        type: String,
        required: true,
        trim: true,
    },
    option2: {
        type: String,
        required: true,
        trim: true,
    },
    option3: {
        type: String,
        required: true,
        trim: true,
    },
    option4: {
        type: String,
        required: true,
        trim: true,
    },
    answer: {
        type: String,
        required: true,
        trim: true,
    },
});

const CQuiz = new mongoose.model("Quiz", addQuizSchema);
module.exports = CQuiz;
