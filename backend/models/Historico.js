const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const HistoricoSchema = Schema({
    alunoId: {type: Schema.Types.ObjectId, require: true, ref: 'Aluno'},    
    cursoId: {type: Schema.Types.ObjectId, require: true, ref: 'Curso'},        
    turmaId: {type: Schema.Types.ObjectId, require: true, ref: 'Turma'},
    situacao: {type: String, requite: true},
});
module.exports = mongoose.model('Historico', HistoricoSchema, 'Historicos');