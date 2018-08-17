require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const favicon = require('serve-favicon');
const cors = require('cors')
const morgan = require('morgan');
const crypto = require('crypto');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// Routes
const index = require('./routes/indexRoutes');
const careers = require('./routes/careerRoutes');
const portfolios = require('./routes/portfolioRoutes');
const products = require('./routes/productRoutes');
const users = require('./routes/userRoutes');
const blogs = require('./routes/blogRoutes');
const applications = require('./routes/applicationRoutes');

// assign mongoose promise library and connect to database
mongoose.Promise = global.Promise;
const URL = process.env.DATABASEURL || process.env.MONGODB_URI_DEV;
//const URL = process.env.MONGODB_URI;

mongoose.connect(URL)
      .then(() => console.log(`Database connected`))
      .catch(err => console.log(`Database connection error: ${err.message}`));

const app = express();

// Register `hbs.engine` with the Express app.
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/public"));

//require moment
app.locals.moment = require('moment');

// Middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(methodOverride('_method'));//For using query string on update and delete request
app.use(express.static(path.join(__dirname, 'public')));

// Routes definitions
app.use('/', index);
app.use('/users', users);
app.use('/careers', careers);
app.use('/careers/:id/applications', applications);
app.use('/portfolios', portfolios);
app.use('/products', products);
app.use('/blogs', blogs);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
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


app.listen( process.env.PORT || 3000, () => {
    console.log('Server started on port', process.env.PORT);
});
module.exports = app;