var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors=require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var subCategoryRouter = require('./routes/subcategory');
var brandRouter = require('./routes/brand');
var productRouter = require('./routes/product');
var productDetailRouter = require('./routes/productdetail');
var productPictureRouter = require('./routes/productpicture');
var mainBannerRouter = require('./routes/mainbanner');
var adOffersRouter = require('./routes/adoffers');
var bankOfferRouter = require('./routes/bankoffer');
var smsRouter = require('./routes/smsapi');

var adminLoginRouter = require('./routes/adminlogin');
var userInterfaceRouter = require('./routes/userinterface');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category',categoryRouter)
app.use('/subcategory',subCategoryRouter)
app.use('/brand',brandRouter)
app.use('/product',productRouter)
app.use('/productdetail',productDetailRouter)
app.use('/productpicture',productPictureRouter)
app.use('/mainbanner',mainBannerRouter)
app.use('/bankoffer',bankOfferRouter)
app.use('/adoffers',adOffersRouter)
app.use('/adminlogin',adminLoginRouter)
app.use('/userinterface',userInterfaceRouter)
app.use('/sms',smsRouter)

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
