const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CursoSchema = Schema({    
    nome: {type: String, require: true},
    alunos: [{type: Schema.Types.ObjectId, ref: 'Aluno'}]
});
module.exports = mongoose.model('Curso', CursoSchema, 'Cursos');