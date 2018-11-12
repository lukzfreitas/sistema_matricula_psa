const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TurmaSchema = Schema({
    codCred: {type: String, required: true},
    nomeTurma: {type: String, required: true},
    numeroTurma: {type: Number, required: true},
    vagas: {type: Number, required: true},
    horario: {type: String, required: true}    
});
module.exports = mongoose.model('Turma', TurmaSchema, 'Turmas');
