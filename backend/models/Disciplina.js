const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DisciplinaSchema = Schema({
    nome: {type: String, require: true},    
    semestre: {type: Number, require: true},
    cursos: [{type: Schema.Types.ObjectId, ref: 'Curso'}],      
    requisitos: [{type: Schema.Types.ObjectId, ref: 'Disciplina'}]         
});
module.exports = mongoose.model('Disciplina', DisciplinaSchema, 'Disciplinas');