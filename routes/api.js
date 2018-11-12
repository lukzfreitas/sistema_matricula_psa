var express = require('express');
var ctrAlunos = require('../controllers/alunoController');
var ctrDisciplinas = require('../controllers/disciplinaController');
var ctrHistoricos = require('../controllers/historicoController');
var ctrRequisitos = require('../controllers/requisitoController');
var ctrTurmas = require('../controllers/turmaController');
var router = express.Router();
/* Rotas Organizações */
router.get('/alunos', ctrAlunos.findAll);
// router.get('/organizacoes/:organizacao_id', ctrOrganizacoes.findOne);
// router.post('/organizacoes', ctrOrganizacoes.create);
// router.put('/organizacoes', ctrOrganizacoes.update);
// router.delete('/organizacoes/:organizacao_id', ctrOrganizacoes.delete);
/* Rotas Voluntários */
router.get('/disciplinas', ctrDisciplinas.findAll);
// router.get('/voluntarios/:voluntario_id', ctrVoluntarios.findOne);
// router.post('/voluntarios', ctrVoluntarios.create);
// router.put('/voluntarios', ctrVoluntarios.update);
// router.delete('/voluntarios/:voluntario_id', ctrVoluntarios.delete);
/* Rotas Oportunidades */
router.get('/requisitos/:codCred', ctrRequisitos.findByCodCred);
// router.get('/oportunidades/:oportunidade_id', ctrOportunidades.findOne);
// router.post('/oportunidades', ctrOportunidades.create);
// router.put('/oportunidades', ctrOportunidades.update);
// router.delete('/oportunidades/:oportunidade_id', ctrOportunidades.delete);
router.get('/historicos', ctrHistoricos.findAll);
router.get('/turmas', ctrTurmas.findAll);
module.exports = router;