const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DisciplinaSchema = Schema({
    codCred: {type: String, required: true},
    nomeDisciplina: {type: String, required: true},
    vagas: {type: Number, required: true}
});
module.exports = mongoose.model('Disciplina', DisciplinaSchema, 'Disciplinas');