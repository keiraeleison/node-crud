<!-- This is a CRUD (Create, Update, Delete) app made with Node.js -->

<!-- To start the app: -->
    nodemon server

 
<!--  Used packages:
......................
express, ejs, express-ejs-layouts, mongoose, 
body-parser // parse a form's submitted data
express-session - // Official session package for Express 
cookie-parser // helps read the session out of a cookie
connect-flash // helps store flash data on our session
express-validator // middleware to alidate data coming from a request -->

<!-- Some places the code uses EJS6 syntax
     see ---> for mapping back to EJS5
---------------------------------------------------
  * function(req, res) {} ---> () => {}
  * console.log("localhost:" + port); ---> console.log(`localhost:${port}`);
-->

<!-- There is a ".env.example" file right in the main directory. 
  You should create your own .env file based on that to properly 
  execute the app.   -->