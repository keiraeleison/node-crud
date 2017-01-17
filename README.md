# Node CRUD app #
This is a sample CRUD (Create, Update, Delete) app made with Node.js

##  To start the app: ##

    node server

**Note:** There is a `.env.example` file right in the main directory. You should create your own .env file based on that to properly execute the app.

## Packages used: ##
* express // framework for node
* ejs, express-ejs-layouts, // for html templating
* mongoose, // MongoDB object modeling tool
* body-parser // parse a form's submitted data
* express-session - // official session package for Express 
* cookie-parser // helps read the session out of a cookie
* connect-flash // helps store flash data on our session
* express-validator // middleware to validate data coming from a request

## Some places ES6 syntax is being used ##
see ---> for mapping back to ES5

   * `function(req, res) {}` ---> `(req, res) => {}`
   * `console.log("localhost:" + port);` ---> ``console.log(`localhost:${port}`);``