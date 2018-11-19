var express = require('express');
var ctrAlunos = require('../controllers/alunoController');
var ctrDisciplinas = require('../controllers/disciplinaController');
var ctrHistoricos = require('../controllers/historicoController');
var ctrRequisitos = require('../controllers/requisitoController');
var ctrTurmas = require('../controllers/turmaController');
var passport = require('passport');
var Aluno = require('../models/aluno');



var router = express.Router();

router.post('/register', function (request, response) {
    var usuario = {username : request.body.username, email: request.body.email};
    var senha = request.body.senha;
    Aluno.register(new Aluno(usuario), senha, function(error, result) {
        if (error) {
            console.log(error);
        }
        passport.authenticate('local')(requeste, response, function () {            
            console.log('sucesso', result);
        });
    });
});

router.post('/login', passport.authenticate('local'), function (request, response){
     
});
    


/* Rotas Alunos */
router.get('/alunos', ctrAlunos.findAll);
/* Rotas Disciplinas */
router.get('/disciplinas', ctrDisciplinas.findAll);

/* Rotas Requisitos */
router.get('/requisitos/:codCred', ctrRequisitos.findByCodCred);
/* Rotas Historicos */
router.get('/historicos', ctrHistoricos.findAll);
/* Rotas Turmas */
router.get('/turmas', ctrTurmas.findAll);
router.get('/turmas/matricular-se', ctrTurmas.matricularse);
router.get('/turmas/cancelar-matricula', ctrTurmas.cancelarMatricula);
module.exports = router;