var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.status(200).json([
    {
      question: "sample 1",
      correct_answer: "correct",
      incorrect_answers: [
          "no",
          "no2",
          "no3",
      ]
  },
  {
    question: "sample 2",
    correct_answer: "correct",
    incorrect_answers: [
        "no",
        "no2",
        "no3",
    ]
},
{
  question: "sample 3",
  correct_answer: "correct",
  incorrect_answers: [
      "no",
      "no2",
      "no3",
  ]
},
  ]);
});

module.exports = router;
