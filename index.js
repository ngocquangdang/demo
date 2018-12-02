require('dotenv').config()

// console.log(process.env.SESSION_SECRET)
const express = require('express')


var mongoose = require('mongoose');
var passport = require('passport');
var morgan       = require('morgan');
var flash    = require('connect-flash');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
var session      = require('express-session');


var indexRoute = require('./routes/index.router')
var userRoute = require('./routes/users.router')
// var products = require('./routes/products.router')
var bookRoute = require('./routes/book.router')

mongoose.connect(process.env.MONGO_URL);

var loginMiddleware = require('./Middelware/login.Middleware')
var sessionMiddleware = require('./Middelware/session.Middleware')

const app = express()
app.use(morgan('dev'))

app.use(bodyParser())
// app.use(bodyParser.urlencoded({extended: true}))


app.set('view engine','pug')
app.set('views', './views')

app.use(cookieParser(process.env.SESSION_SECRET))
app.use(session({secret: 'xxxxxxxxxxxx' }))
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

app.use(express.static('public')) // đọc đc all file trong thư mục public
app.use(express.static('views'))


// app.use(sessionMiddleware)


app.use('/User',loginMiddleware.requireAuth, userRoute)

// app.use('/Product', products)
app.use('/',indexRoute)
app.use('/createBook',bookRoute)



app.listen(5000, function(){
    console.log('connect to port 5500')
})
