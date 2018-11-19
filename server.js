'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
require('./db');
var routeapi = require('./routes/api');
var LocalStrategy = require('passport-local').Strategy;

app.use(session({ secret: 'psasecret', resave: true,  saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api', routeapi);
app.use(express.static('./public'));
app.use(express.static('./node_modules'));

var Aluno = require('./models/aluno');
passport.use(new LocalStrategy(Aluno.authenticate()));
passport.serializeUser(Aluno.serializeUser());
passport.deserializeUser(Aluno.deserializeUser());

var server = app.listen(8080, function () {
    console.log('Express disponível em ' + server.address().port);
});
