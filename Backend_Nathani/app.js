const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT;

const indexRouter = require('./routes/index');

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-Auth-Token']
}));

app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));

// Database connection
mongoose.connect(process.env.MONGOURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
.then(() => {
  console.log('Nathani Database connected');
})
.catch((error) => {
  console.log('Error connecting to database', error);
});

// Routes
app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
