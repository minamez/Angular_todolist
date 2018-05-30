var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// requiert un bodyparser
var bodyParser = require('body-parser');
//Inclusion des Cross Origin Ressource Sharing (cors)
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//Requiert les routes de TodosRoute
var Todos = require('./routes/TodosRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// utilisation des fichiers de routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Todos', Todos);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
