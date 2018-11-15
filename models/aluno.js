const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AlunoSchema = Schema({
    matricula : {type: String, required: true, unique: true, maxlength: 9, minlength: 9},
    email: {type: String, required: true},
    senha: {type: String}
});
module.exports = mongoose.model('Aluno', AlunoSchema, 'Alunos');
