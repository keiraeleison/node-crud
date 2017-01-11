// create new express router
const express = require('express');
const router = express.Router();
const mainController = require('./controllers/main.controller');
const eventsController = require('./controllers/events.controller');

// export router
module.exports = router;

// define routes
router.get('/', mainController.showHome);

router.get('/events',eventsController.showEvents);

router.get('/events/:slug', eventsController.showSingle);