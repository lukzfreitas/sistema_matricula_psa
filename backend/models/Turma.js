const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TurmaSchema = Schema({    
    nome: {type: String, require: true},
    vagas: {type: Number, require: true},
    horario: {type: String, require: true}
});
module.exports = mongoose.model('Turma', TurmaSchema, 'Turmas');