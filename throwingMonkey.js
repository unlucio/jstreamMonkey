var express = require('express');
var logger = require('morgan');
var path = require('path');
var fs = require('fs');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));

app.get('/data', function(req, res){
    var data = JSON.parse(fs.readFileSync('./data/data.json'));
    res.json(data);
});

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

var server = app.listen(app.get('port'), function () {
    console.log('Monkey dispatching json bananas on port: ' + server.address().port);
});
