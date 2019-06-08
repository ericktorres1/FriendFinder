var express = require ('express');
var bodyParser = require('body-parser');


var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

require('./app/routing/apiRoutes')(app);

app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
  });