var express = require('express');
var app = express();

var port = process.env.PORT || 3001;

app.set('view engine', 'jade');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){

    res.render('index');
});

app.listen(port);