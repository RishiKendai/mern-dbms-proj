const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
    trim: true,
  },
});

const SQuiz = new mongoose.model('score', scoreSchema);
module.exports = SQuiz;
