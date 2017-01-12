// load env variables
require('dotenv').config();

const express    = require('express');
  app            = new express();
  port           = process.env.PORT || 8080;
  expressLayouts = require('express-ejs-layouts');
  mongoose       = require('mongoose');
  bodyParser     = require('body-parser');
  session        = require('express-session'); 
  cookieParser   = require('cookie-parser');
  flash          = require('connect-flash');
  expressValidator = require('express-validator');


// configure ====================================
// set session and cookie parser
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET,
  cookie: { maxAge: 60000 },
  resave: false, // forces the session to be saved back to the store
  saveUninitialized: false // don't save unmodified
}));
app.use(flash());

// tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

// set ejs as templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// connect to the database
mongoose.connect(process.env.DB_URI);


// use body-parser to grab info from a form
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());


// set the routes ================================
app.use(require('./app/routes'));



// start the app =================================
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});