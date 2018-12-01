var ctrTurmas = require('../controllers/turmaController');
var ctrAlunos = require('../controllers/alunoController');

module.exports = function (app, passport) {    

    // =============================================================================
    // Página Inicial ==============================================================
    // =============================================================================
    app.get('/', function (req, res) {
        res.render('index.html');
    });

    // =============================================================================
    // Rotas seguras ===============================================================
    // =============================================================================
    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('profile.html', {
            user: req.user
        });
    });

    app.get('/aluno', isLoggedIn, ctrAlunos.find);

    app.get('/turmas', isLoggedIn, ctrTurmas.findAll);

    app.post('/turmas/matricular-se', isLoggedIn, ctrTurmas.matricularSe);

    app.post('/turmas/cancelar-matricula', isLoggedIn, ctrTurmas.cancelarMatricula);
    
    // =============================================================================
    // logout ===============================================================
    // =============================================================================
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    // =============================================================================
    // Autenticação ================================================================
    // =============================================================================

    app.get('/login', function (req, res) {
        res.render('login.html', { message: req.flash('loginMessage') });
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    }));
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}
