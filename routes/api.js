var express = require('express');
var ctrAlunos = require('../controllers/alunoController');
var ctrDisciplinas = require('../controllers/disciplinaController');
var ctrHistoricos = require('../controllers/historicoController');
var ctrRequisitos = require('../controllers/requisitoController');
var ctrTurmas = require('../controllers/turmaController');
var router = express.Router();
/* Rotas Alunos */
router.get('/alunos', ctrAlunos.findAll);
/* Rotas Disciplinas */
router.get('/disciplinas', ctrDisciplinas.findAll);
/* Rotas Requisitos */
router.get('/requisitos/:codCred', ctrRequisitos.findByCodCred);
/* Rotas Históricos */
router.get('/historicos', ctrHistoricos.findAll);
/* Rotas Turmas */
router.get('/turmas', ctrTurmas.findAll);
router.post('/turmas/matricular-se', ctrTurmas.matricularse);
router.post('/turmas/cancelar-matricula', ctrTurmas.cancelarMatricula);
module.exports = router;