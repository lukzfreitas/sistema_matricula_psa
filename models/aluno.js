const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AlunoSchema = Schema({
    matricula : {type: String, required: true, unique: true, maxlength: 9, minlength: 9},
    senha: {type: String, required: true},
    nome: {type: String, required: true}
});
module.exports = mongoose.model('Aluno', AlunoSchema, 'Alunos');
