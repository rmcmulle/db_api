// note_routes.js
// Express routing for endpoints with /notes

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  // POST note to db
  app.post('/notes', function (req, res) {
    const note = {
      text: req.body.body_input,
      title: req.body.title_input
    };
    db.collection('notes').insert(note, function(err, result) {
      if (err) {
        res.send({
          'error': "An error occured inserting into database"
        });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  // GET note by :id
  app.get('/notes/:id', function(req, res) {
    const id = req.params.id;
    const details = {
      '_id': new ObjectID(id)
    };
    db.collection('notes').findOne(details, function(err, item) {
      if (err) {
        res.send({
          'error': "Error retreiving entry from database"
        });
      } else {
        res.send(item);
      }
    });
  });

  // DELETE note using :id
  app.delete('/notes/:id', function(req, res) {
    const id = req.params.id;
    const details = {
      '_id': new ObjectID(id)
    }
    db.collection('notes').deleteOne(details, function(err, item) {
      if (err) {
        res.send({
          'error': "Error deleting entry from database"
        });
      } else {
        res.send('Note ' + id + ' deleted!');
      }
    });
  });

  // UPDATE a note with new content
  app.put('notes/:id', function(req, res) {
    const id = req.params.id;
    const details = {
      '_id': new ObjectID(id)
    };
    const note = {
      text: req.body.body_input,
      title: req.body.title_input
    };
    db.collection('notes').update(details, notes, function(err, result) {
      if (err) {
        res.send({
          'error' : "There was an error updating your note"
        });
      } else {
        res.send(note);
      }
    });
  });

};
