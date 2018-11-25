var service = require('../services/service');
var mongoose = require('mongoose');
var Turma = mongoose.model('Turma');
var Historico = mongoose.model('Historico');
var Requisito = mongoose.model('Requisito');

module.exports.findAll = function (request, response) {

    var query = { matriculaAluno: request.user.matricula, situacao: "APR" };
    var projection = { codCred: 1, _id: 0 }

    Historico.find(query, projection).then(function (historicos) {
        var codCredAprovadas = historicos.map(function (historico) {
            return historico.codCred;
        });
        Requisito.find({ codCredRequisito: { $in: codCredAprovadas } }).then(function (requisitos) {
            var promises = requisitos.map(function (requisito) {
                var query = { $and: [{ codCred: requisito.codCred }, { codCred: { $nin: codCredAprovadas } }] };
                return Turma.findOne(query).then(function (turma) {
                    return turma;
                })
            });
            Promise.all(promises).then(function (result) {
                result = result.filter(function (value) {
                    return !this[JSON.stringify(value)] && (this[JSON.stringify(value)] = true) && value != null;
                }, Object.create(null))
                service.sendJSON(response, 200, result);
            })
        });
    });
}

module.exports.matricularSe = function (request, response) {    
    var codCred = request.body.codCred;
    var numeroTurma = request.body.numeroTurma;
    var query = { codCred: codCred, numeroTurma: numeroTurma, vagas: { $gt: 0 } };
    var set = { $inc: { vagas: -1 } };
    Turma.findOneAndUpdate(query, set, function (error, result) {
        if (error) {
            service.sendJSON(response, 500, error);
        } else {
            service.sendJSON(response, 200, result);
        }
    });
}

module.exports.cancelarMatricula = function (request, response) {
    var codCred = request.body.codCred;
    var numeroTurma = request.body.numeroTurma;
    var query = { codCred: codCred, numeroTurma: numeroTurma };
    var set = { $inc: { vagas: 1 } };
    Turma.findOneAndUpdate(query, set, function (error, result) {
        if (error) {
            service.sendJSON(response, 500, error);
            console.log(error);
        } else {
            service.sendJSON(response, 200, result);
            console.log(result);
        }
    });
}