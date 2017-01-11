module.exports = {

  // show all events
  showEvents: (req, res) => {
    // create dummy events
    const events = [
      { name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket.' },
      { name: 'Swimming', slug: 'swimming', description: 'Micheal Phelps is the fast fish.' },
      { name: 'Weightlifting', slug: 'weightlifting', description: 'Lifting heavy things up.'}
    ];

    // return a view with data
    res.render('pages/events', { events: events });
  },

  // show a single event
  showSingle: (req, res) => {
    const event = { name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket.' };
    res.render('pages/single', { event: event });
 }

 // create events
 // edit events
 // delete events

}