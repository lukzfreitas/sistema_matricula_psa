const mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;
const AlunoSchema = Schema({
    matricula : {type: String, required: true, unique: true, maxlength: 9, minlength: 9},
    username: {type: String, required: true, unique: true},
    senha: {type: String}
});
AlunoSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Aluno', AlunoSchema, 'Alunos');
