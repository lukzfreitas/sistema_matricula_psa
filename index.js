'use strict';

var express = require('express');
var bodyParser = require('body-parser');
require('./backend/db')
var routeapi = require('./backend/routes/Api');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/Api', routeapi);
app.use(express.static('./frontend'));
app.use(express.static('./node_modules'));

var server = app.listen(8080, function () {
    console.log('Express disponível em ' + server.address().port);
});
