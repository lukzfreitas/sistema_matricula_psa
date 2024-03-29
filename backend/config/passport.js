
var LocalStrategy = require('passport-local').Strategy;
var Aluno = require('../models/aluno');

module.exports = function (passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function (aluno, done) {
        done(null, aluno.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        Aluno.findById(id, function (err, aluno) {
            done(err, aluno);
        });
    });

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
        function (req, email, password, done) {
            if (email)
                email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

            // asynchronous
            process.nextTick(function () {
                Aluno.findOne({ 'email': email }, function (err, aluno) {
                    // if there are any errors, return the error
                    if (err)
                        return done(err);

                    // if no user is found, return the message
                    if (!aluno)
                        return done(null, false, req.flash('loginMessage', 'Nenhum aluno encontrado.'));

                    if (!aluno.validPassword(password))
                        return done(null, false, req.flash('loginMessage', 'Oops! Senha inválida.'));

                    // all is well, return user
                    else
                        return done(null, aluno);
                });
            });

        }));

};
