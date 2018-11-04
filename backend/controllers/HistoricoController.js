var service = require('../services/Service');
var mongoose = require('mongoose');
var Historico = mongoose.model('Historico');

module.exports.findAll = function (request, response) {
    Historico.find({}).exec(function (error, result) {
        if (error) {
            service.sendJSON(response, 500, error);
        } else {
            service.sendJSON(response, 200, result);
        }
    }); 
}

module.exports.findOne = function (request, response) {
    if (!request.params || !request.params.historico_id) {
        service.sendJSON(response, 400, {mensagem: 'Requisição inválida'});
    } else {
        Historico.findById(request.params.historico_id, function (error, result){
            if (error) {
                service.sendJSON(response, 500, error);
            } else if (!result || result.length == 0) {
                service.sendJSON(response, 404, {mensagem: 'Nenhum historico encontrado'});
            } else {
                service.sendJSON(response, 200, result);
            }
        });
    }
}

module.exports.create = function (request, response) {
    Historico.create(request.body, function (error, result) {
        if (error) {
            service.sendJSON(response, 500, error);
        } else {
            service.sendJSON(response, 200, result);
        }
    });
}