const noteRoutes = require('./note_routes');
const homeRoutes = require('./home_routes');

module.exports = function(app, db) {
  homeRoutes(app, db);
  noteRoutes(app, db);
};
