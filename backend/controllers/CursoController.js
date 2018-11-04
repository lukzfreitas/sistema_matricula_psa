var service = require('../services/Service');
var mongoose = require('mongoose');
var Curso = mongoose.model('Curso');

module.exports.findAll = function (request, response) {
    Curso.find({}).exec(function (error, result) {
        if (error) {
            service.sendJSON(response, 500, error);
        } else {
            service.sendJSON(response, 200, result);
        }
    }); 
}

module.exports.findOne = function (request, response) {
    if (!request.params || !request.params.curso_id) {
        service.sendJSON(response, 400, {mensagem: 'Requisição inválida'});
    } else {
        Curso.findById(request.params.curso_id, function (error, result){
            if (error) {
                service.sendJSON(response, 500, error);
            } else if (!result || result.length == 0) {
                service.sendJSON(response, 404, {mensagem: 'Nenhum curso encontrado'});
            } else {
                service.sendJSON(response, 200, result);
            }
        });
    }
}

module.exports.create = function (request, response) {
    Curso.create(request.body, function (error, result) {
        if (error) {
            service.sendJSON(response, 500, error);
        } else {
            service.sendJSON(response, 200, result);
        }
    });
}