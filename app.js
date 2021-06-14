var express = require('express');
var logger = require('morgan');
const cors = require("cors");
var quizRouter = require('./routes/quizzes');

var app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/quiz', quizRouter);

module.exports = app;