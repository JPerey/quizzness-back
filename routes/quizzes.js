var express = require('express');
const quiz = require("../models/quiz");
var router = express.Router();
var Quiz = require("../models/quiz");

router.get('/', function (req, res) {
  
  quiz.find({}, function(err, quizzes){
    res.status(200).json(quizzes);

  });
});

//this is the CREATE method
router.post('/', (req, res) => {
  console.log(req.body);
  const quiz = new Quiz({ score: req.body.score, quizCategory: req.body.quizCategory });
  quiz.save()
      .then(r => res.status(201).json(r))
      .catch(err => {
          console.log(err.message);
          res.status(500).json(err)
      })
})

module.exports = router;
