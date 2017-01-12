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

// seed events
router.get('/events/seed', eventsController.seedEvents);

// create events - show the form, then process the form
router.get('/events/create', eventsController.showCreate);
router.post('/events/create', eventsController.processCreate);

// edit events
// delete events

// show a single event
router.get('/events/:slug', eventsController.showSingle);