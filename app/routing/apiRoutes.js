var friendMatch = require('../data/friends.js');

module.exports = function(app) {
    // A GET json route to display all possible friends
   app.get('/api/friends', function (req, res) {
     res.json(friendMatch);
   });
};