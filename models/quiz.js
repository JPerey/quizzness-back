const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema ({
    category: String,
    question: [String],
    correctAnswer: [String],
    userScore: Number,

}, { timestamps: true });

module.exports = mongoose.model("Quiz", quizSchema);