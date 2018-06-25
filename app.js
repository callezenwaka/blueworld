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
const index = require('./api/routes/indexRoutes');
const careers = require('./api/routes/careerRoutes');
const portfolios = require('./api/routes/portfolioRoutes');
const products = require('./api/routes/productRoutes');
const users = require('./api/routes/userRoutes');
const blogs = require('./api/routes/blogRoutes');
const applications = require('./api/routes/applicationRoutes');

// Admin Routes
const dashboard = require('./api/routes/admin/indexRoutes');
const adminCareers = require('./api/routes/admin/careerRoutes');
const adminPortfolios = require('./api/routes/admin/portfolioRoutes');
const adminProducts = require('./api/routes/admin/productRoutes');
const adminUsers = require('./api/routes/admin/userRoutes');
const adminApplications = require('./api/routes/admin/applicationRoutes');
const admins = require('./api/routes/admin/adminRoutes');

// assign mongoose promise library and connect to database
mongoose.Promise = global.Promise;
//const databaseUri = process.env.MONGODB_URI_DEV || 'mongodb://localhost/blueworld';
const databaseUri = 'mongodb+srv://blueworld-cosmetics:ZOHDQveD2scYYuUd@blueworld-a79ra.mongodb.net/blueworld?retryWrites=true';

mongoose.connect(databaseUri)
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

// Admin Routes definitions
app.use('/admin', dashboard);
app.use('/admin/careers', adminCareers);
app.use('/admin/portfolios', adminPortfolios);
app.use('/admin/products', adminProducts);
app.use('/admin/applications', adminApplications);
app.use('/admin/users', adminUsers);
app.use('/admin/admins', admins);

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


app.listen( process.env.PORT || 5000, () => {
    console.log('Server started on port', process.env.PORT);
});
module.exports = app;