var service = require('../services/Service');
var mongoose = require('mongoose');
var Turma = mongoose.model('Turma');

module.exports.findAll = function (request, response) {
    Turma.find({}).exec(function (error, result) {
        if (error) {
            service.sendJSON(response, 500, error);
        } else {
            service.sendJSON(response, 200, result);
        }
    }); 
}

module.exports.findOne = function (request, response) {
    if (!request.params || !request.params.turma_id) {
        service.sendJSON(response, 400, {mensagem: 'Requisição inválida'});
    } else {
        Turma.findById(request.params.turma_id, function (error, result){
            if (error) {
                service.sendJSON(response, 500, error);
            } else if (!result || result.length == 0) {
                service.sendJSON(response, 404, {mensagem: 'Nenhuma turma encontrado'});
            } else {
                service.sendJSON(response, 200, result);
            }
        });
    }
}

module.exports.create = function (request, response) {
    Turma.create(request.body, function (error, result) {
        if (error) {
            service.sendJSON(response, 500, error);
        } else {
            service.sendJSON(response, 200, result);
        }
    });
}