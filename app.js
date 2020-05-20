var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var infoRouter=require('./routes/information_tblsRoute');
var infoBYIDRouter=require('./routes/informationByID_Route');
var productRouter=require('./routes/product_tblsRoute');
var productbycat=require('./routes/productBYcatRoute');
var wishlistRouter=require('./routes/wishlist_tblsRoute');
var cartRouter=require('./routes/cart_tblsRoute');
var deleteallcartitem=require('./routes/cartalldeleteRoute');
var orderRouter=require('./routes/order_tblsRoute');
var orderbystatusRouter=require('./routes/orderbystatusRoute');
var suborderRouter=require('./routes/suborder_tblsRoute');
var joinorderRouter=require('./routes/JOINorder_suborder');
var bufferstock=require('./routes/buffer_stockRoute');
var contactusRoute=require('./routes/contactusRoute');
var billRoute=require('./routes/bill_tblsRoute');
var billdetailRoute=require('./routes/billdetail_tblsRoute');
var pastorderRouter=require('./routes/pastorder_tblsRoute');
var mailRouter=require('./routes/mailRoute');


var cat=require('./routes/cat_tbls');
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
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/info',infoRouter);
app.use('/infobyid',infoBYIDRouter);
app.use('/product',productRouter);
app.use('/productbycat',productbycat);
app.use('/wishlist',wishlistRouter);
app.use('/cart',cartRouter);
app.use('/deleteall',deleteallcartitem);
app.use('/order',orderRouter);
app.use('/orderbystatus',orderbystatusRouter);
app.use('/suborder',suborderRouter);
app.use('/joinorder',joinorderRouter);
app.use('/bufferstock',bufferstock);
app.use('/contactus',contactusRoute);
app.use('/bill',billRoute);
app.use('/billdetail',billdetailRoute);
app.use('/pastorder',pastorderRouter);
app.use('/mail',mailRouter);


app.use('/cat',cat);
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
