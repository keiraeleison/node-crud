const Event = require('../models/event');

module.exports = {
  showEvents: showEvents,
  showSingle: showSingle,
  seedEvents: seedEvents,
  showCreate: showCreate,
  processCreate: processCreate,
  showEdit: showEdit,
  processEdit: processEdit, 
  deleteEvent: deleteEvent
}

/**
 * Show all events
 */
function showEvents(req, res) {
  // get all events
  Event.find({}, (err, events) => {
    if (err) {
      res.status(404);
      return res.send('Events not found!');
    } else {
      // return a view with data
      res.render('pages/events', { 
        events: events,
        success: req.flash('success') });
    }
  });
};

/**
 * Show a single event
 */
function showSingle(req, res) {
  Event.findOne({ slug: req.params.slug }, (err, event) => {
    if (err || !event) {
      res.status(404);
      return res.send('Events not found!');
    } else {
      res.render('pages/single', { 
        event: event,
        success: req.flash('success')
      });
    }
  });
};

/**
 * Seed the database
 */
function seedEvents(req, res) {
  // create some events
  const events = [
    { name: 'Basketball', description: 'Throwing into a basket.' },
    { name: 'Swimming', description: 'Micheal Phelps is the fast fish.' },
    { name: 'Weightlifting', description: 'Lifting heavy things up.'},
    { name: 'Ping Pong', description: 'Super fast paddles' }
  ];

  // use the Event model to insert/save
  Event.remove({}, () => {
    for (event of events) {
    var newEvent = new Event(event);
    newEvent.save();
  }
  });

  // seeded!
  res.send('Database seeded!');
}

/**
 * Show the create form
 */
function showCreate(req, res) {
  res.render('pages/create', {
    errors: req.flash('errors')
  });
}

/**
 * Process the create form
 */
function processCreate(req, res) {
  // validate information:
  //    use CHECKPARAM if coming from a URL parameter
  //    use CHECKBODY if coming from a form
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('description', 'Description is also required').notEmpty();

  // if there are errors, redirect and save errors to the flash data
  const errors = req.validationErrors();
  if (errors) {
    // reformats errors object so that we only grab the message
    req.flash('errors', errors.map(err => err.msg));
    return res.redirect('/events/create');
  }

  // create a new event
  const event = new Event({
    name: req.body.name,
    description: req.body.description
  });

  // save the event
  event.save((err) => {
    if (err) {
      throw err;
    } else {

      // set a successful flash message
      req.flash('success', 'Successfully created event!');
      // redirect to the newly created event
      res.redirect(`/events/${event.slug}`);
    }
  });
}

/**
 * Show the edit form
 */
function showEdit(req, res) {
  Event.findOne({ slug: req.params.slug}, (err, event) => {
    res.render('pages/edit', {
      event: event,
      errors: req.flash('errors')
    });
  });
}

/**
 * Process the edit form
 */
function processEdit(req, res) {
  // validate information:
  //    use CHECKPARAM if coming from a URL parameter
  //    use CHECKBODY if coming from a form
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('description', 'Description is also required').notEmpty();

  // if there are errors, redirect and save errors to the flash data
  const errors = req.validationErrors();
  if (errors) {
    // reformats errors object so that we only grab the message
    req.flash('errors', errors.map(err => err.msg));
    return res.redirect(`/events/${req.params.slug}/edit`);
  }

  // finding current event
  Event.findOne( { slug: req.params.slug }, (err, event) => {
    if (err) {
      res.status(404);
      return res.send('Something went wrong!');
    }

    // updating that event
    event.name = req.body.name;
    event.description = req.body.description;

    event.save((err) => {
      if (err)
          throw err;
      // success flash message
      req.flash('success', 'Successfully updated event');
      // redirect back to the /events
      res.redirect('/events');
    });
  } );
}

  /**
   * Delete an event
   */
  function deleteEvent(req, res) {
    Event.remove({ slug: req.params.slug }, (err) => {
      if (err)  
        throw err;
      req.flash('success', 'Event deleted!');
      res.redirect('/events');
    });
    
  }
