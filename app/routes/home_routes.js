module.exports = function(app, db) {

  app.get('/', function (req, res) {
    //console.log(req.body);
    res.render('form');
  });

  app.post('/', function (req, res) {
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
};
