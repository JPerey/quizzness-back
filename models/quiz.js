const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema ({
    score: {
        type: String,
        required: true,
    },
    quizCategory: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model("Quiz", quizSchema);