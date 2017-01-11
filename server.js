// load env variables
require('dotenv').config();

const express        = require('express');
const app            = new express();
const port           = process.env.PORT || 8080;
const expressLayouts = require('express-ejs-layouts');
const mongoose       = require('mongoose');



// configure ====================================
// tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

// set ejs as templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// connect to the database
mongoose.connect(process.env.DB_URI);



// set the routes ================================
app.use(require('./app/routes'));



// start the app =================================
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});