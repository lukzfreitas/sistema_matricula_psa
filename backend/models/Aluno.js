const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AlunoSchema = Schema({
    matricula: {type: String, require: true, unique: true},    
    nome: {type: String, require: true},
    curso: {type: Schema.Types.ObjectId, ref: 'Curso'}        
});
module.exports = mongoose.model('Aluno', AlunoSchema, 'Alunos');