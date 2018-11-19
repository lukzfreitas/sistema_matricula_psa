var service = require('../services/service');
var mongoose = require('mongoose');
var passport = require('passport');
var Turma = mongoose.model('Turma');
var Aluno = mongoose.model('Aluno');


module.exports.findAll = function (request, response) {  

    Turma.find({}, function (error, result){
        if(error) {
            service.sendJSON(response, 500, error);
        } else {
            service.sendJSON(response, 200, result);
        }
    }); 
}

module.exports.matricularse = function (request, response) {    
    var codCred = request.body.codCred;
    var numeroTurma = request.body.numeroTurma
    var query = {codCred: codCred, numeroTurma: numeroTurma, vagas: {$gt: 0}};
    var set = {$inc: {vagas: -1}};
    Turma.findOneAndUpdate(query, set, function(error, result){
        if (error) {
            service.sendJSON(response, 500, error);
            console.log(error);
        } else {
            service.sendJSON(response, 200, result);
            console.log(result);
        }
    }); 
}

module.exports.cancelarMatricula = function (request, response) {
    var codCred = request.body.codCred;
    var numeroTurma = request.body.numeroTurma;
    var query = {codCred: codCred, numeroTurma: numeroTurma};
    var set = {$inc: {vagas: 1}};
    Turma.findOneAndUpdate(query, set, function(error, result){
        if (error) {
            service.sendJSON(response, 500, error);
            console.log(error);
        } else {
            service.sendJSON(response, 200, result);
            console.log(result);
        }
    }); 
}