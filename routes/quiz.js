const router = require('express').Router();
let CQuiz = require('../model/addQuizSchema');
let SQuiz = require('../model/scoreSchema');

// Get Quiz
router.route('/').get((req, res) => {
  CQuiz.find({}, (err, foundQuestion) => {
    if (err) {
    } else {
      if (foundQuestion) res.json(foundQuestion);
    }
  });
});
// Create Quiz
router.route('/add-question').post((req, res) => {
  const newQuestion = new CQuiz({
    question: req.body.question,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    answer: req.body.answer,
  });
  newQuestion.save((err, success) => {
    if (err) res.status(400).json('Error ' + err);
    else {
      if (success) res.json('Question Added');
    }
  });
});

// Get Particular Question
router.route('/:id').get((req, res) => {
  CQuiz.findById({ _id: req.params.id }, (err, foundID) => {
    if (err) res.status(400).json('Error: ' + err);
    else {
      if (foundID) res.json(foundID);
    }
  });
});

// EDIT
router.route('/update-question/:id').put((req, res) => {
  CQuiz.updateMany(
    { _id: req.params.id },
    {
      $set: {
        question: req.body.question,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,
        option4: req.body.option4,
        answer: req.body.answer,
      },
    },
    (err) => {
      if (err) {
        res.status(400).json('Error: ' + err);
      } else {
        res.status(200).json('updated successfully');
      }
    }
  );
});

router.route('/delete-question/:id').delete((req, res) => {
  CQuiz.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(400).json('Eroor: ' + err);
    } else {
      res.status(200).json('Deleted Successfully');
    }
  });
});

// HANDLE SCORE
router.route('/scoreboard/scores').get((req, res) => {
  SQuiz.find({}, (err, foundScore) => {
    if (err) {
    } else {
      if (foundScore) res.json(foundScore);
    }
  });
});
router.route('/scoreboard-scores/add').post((req, res) => {
  const newScore = new SQuiz({
    playerName: req.body.playerName,
    score: req.body.score,
  });
  newScore.save((err, success) => {
    if (err) res.status(400).json('Error ' + err);
    else {
      if (success) res.status(200).json('Score Added');
    }
  });
});

module.exports = router;
