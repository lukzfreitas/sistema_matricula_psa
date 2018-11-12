var service = require('../services/service');
var mongoose = require('mongoose');
var Turma = mongoose.model('Turma');


module.exports.findAll = function (request, response) {
    Turma.find({}, function (error, result){
        if(error) {
            service.sendJSON(response, 500, error);
        } else {
            service.sendJSON(response, 200, result);
        }
    }); 
}

module.exports.findOne = function (request, response) {
    // if (!request.params || !request.params.voluntario_id) {
    //     service.sendJSON(response, 400, { mensagem: 'Requisição inválida' });
    // } else {
    //     Voluntario.findById(request.params.voluntario_id, function (error, result) {
    //         if (error) {
    //             service.sendJSON(response, 500, error);
    //         } else if (!result || result.length == 0) {
    //             service.sendJSON(response, 404, { mensagem: 'Nenhum voluntário localizado' });
    //         } else {
    //             service.sendJSON(response, 200, result);
    //         }
    //     });
    // }
}

module.exports.create = function (request, response) {
    // if (request.body.cpf) {
    //     request.body.cpf = service.replaceCPF(request.body.cpf);
    //     console.log(request.body.cpf);
    //     if (service.validateCPF(request.body.cpf)) {
    //         Voluntario.create(request.body, function (error, result) {
    //             if (error) {
    //                 service.sendJSON(response, 500, error);
    //             } else {
    //                 service.sendJSON(response, 200, result);
    //             }
    //         });
    //     } else {
    //         service.sendJSON(response, 400, { mensagem: 'CPF inválido' });
    //     }
    // } else {
    //     service.sendJSON(response, 400, { mensagem: 'Requisição inválida' });
    // }
}

module.exports.update = function (request, response) {
    // if (!request.body || !request.body._id) {
    //     service.sendJSON(response, 400, { mensagem: 'Requisição inválida' });
    // } else {
    //     if (request.body.cpf) {
    //         request.body.cpf = service.replaceCPF(request.body.cpf);
    //         if (!service.validateCPF(request.body.cpf)) {
    //             service.sendJSON(response, 400, { mensagem: 'CPF inválido' });
    //             return;
    //         }
    //     }
    //     Voluntario.findByIdAndUpdate(request.body._id, { $set: request.body }).exec(function (error, result) {
    //         if (error) {
    //             service.sendJSON(response, 500, error);
    //         } else if (!result || result.length == 0) {
    //             service.sendJSON(response, 404, { mensagem: 'Nenhum voluntário localizado' });
    //         } else {
    //             service.sendJSON(response, 205, { mensagem: 'Voluntário alterado com sucesso' });
    //         }
    //     });
    // }
}

module.exports.delete = function (request, response) {
    // if (!request.params || !request.params.voluntario_id) {
    //     service.sendJSON(response, 400, { mensagem: 'Requisição inválida' });
    // } else {
    //     Voluntario.findByIdAndRemove(request.params.voluntario_id).exec(function (error, result) {
    //         if (error) {
    //             service.sendJSON(response, 500, error);
    //         } else if (!result || result.length == 0) {
    //             service.sendJSON(response, 404, { mensagem: 'Nenhum voluntário localizado' });
    //         } else {
    //             service.sendJSON(response, 200, { mensagem: 'Voluntário removido com sucesso' });
    //         }
    //     });
    // }
}