var service = require('../services/Service');
var mongoose = require('mongoose');
var Aluno = mongoose.model('Aluno');

module.exports.findAll = function (request, response) {
    Aluno.find({}).exec(function (error, result) {
        if (error) {
            service.sendJSON(response, 500, error);
        } else {
            service.sendJSON(response, 200, result);
        }
    }); 
}

module.exports.findOne = function (request, response) {
    if (!request.params || !request.params.aluno_id) {
        service.sendJSON(response, 400, {mensagem: 'Requisição inválida'});
    } else {
        Aluno.findById(request.params.aluno_id, function (error, result){
            if (error) {
                service.sendJSON(response, 500, error);
            } else if (!result || result.length == 0) {
                service.sendJSON(response, 404, {mensagem: 'Nenhum aluno encontrado'});
            } else {
                service.sendJSON(response, 200, result);
            }
        });
    }
}

module.exports.create = function (request, response) {
    Aluno.create(request.body, function (error, result) {
        if (error) {
            service.sendJSON(response, 500, error);
        } else {
            service.sendJSON(response, 200, result);
        }
    });
}