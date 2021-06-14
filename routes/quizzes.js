var express = require('express');
const quiz = require("../models/quiz");
var router = express.Router();
var Quiz = require("../models/quiz");

router.get('/', function (req, res) {
  
  quiz.find({}, function(err, quizzes){
    res.status(200).json(quizzes);

  });
});

router.post("/", function (req, res) {
  Quiz.create(req.body, function (err, quiz) {
    res.status(201).json(quiz);

  });

});

module.exports = router;
