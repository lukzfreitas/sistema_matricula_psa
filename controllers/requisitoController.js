var service = require('../services/service');
var mongoose = require('mongoose');
var Requisito = mongoose.model('Requisito');
var Disciplina = mongoose.model('Disciplina');


module.exports.findByCodCred = function (request, response) {
    Requisito.find({ codCred: request.params.codCred }, function (error, requisitos) {
        var promises = requisitos.map(function (requisito) {
            return Disciplina.findOne({codCred: requisito.codCredRequisito}).then(function (disciplinas) {
                return disciplinas;
            })
        });        
        Promise.all(promises).then(function (results){
            service.sendJSON(response, 200, results);
        })    
    });    
}


module.exports.findOne = function (request, response) {
    // if (!request.params || !request.params.organizacao_id) {
    //     service.sendJSON(response, 400, { mensagem: 'Requisição inválida' });
    // } else {
    //     Organizacao.findById(request.params.organizacao_id, function (error, result) {
    //         if (error) {
    //             service.sendJSON(response, 500, error);
    //         } else if (!result || result.length == 0) {
    //             service.sendJSON(response, 404, { mensagem: 'Nenhuma organização localizada' });
    //         } else {
    //             service.sendJSON(response, 200, result);
    //         }
    //     });
    // }
}

module.exports.create = function (request, response) {
    // TODO: 
}

module.exports.update = function (request, response) {
    // if (!request.body || !request.body._id) {
    //     service.sendJSON(response, 400, { mensagem: 'Requisição inválida' });
    // } else {
    //     if (request.body.cnpj) {            
    //         request.body.cnpj = service.replaceCPNJ(request.body.cnpj);
    //         if (!service.validateCPNJ(request.body.cnpj)) {
    //             service.sendJSON(response, 400, { mensagem: 'CNPJ inválido' });
    //             return;
    //         }
    //     }        
    //     Organizacao.findByIdAndUpdate(request.body._id, { $set: request.body }).exec(function (error, result) {
    //         if (error) {
    //             service.sendJSON(response, 500, error);
    //         } else if (!result || result.length == 0) {
    //             service.sendJSON(response, 404, { mensagem: 'Nenhuma organização localizada' });
    //         } else {
    //             service.sendJSON(response, 205, { mensagem: 'Organização alterada com sucesso' });
    //         }
    //     });
    // }
}

module.exports.delete = function (request, response) {
    // if (!request.params || !request.params.organizacao_id) {
    //     service.sendJSON(response, 400, { mensagem: 'Requisição inválida' });
    // } else {
    //     Organizacao.findByIdAndRemove(request.params.organizacao_id).exec(function (error, result) {
    //         if (error) {
    //             service.sendJSON(response, 500, error);
    //         } else if (!result || result.length == 0) {
    //             service.sendJSON(response, 404, { mensagem: 'Nenhuma organização localizada' });
    //         } else {
    //             service.sendJSON(response, 200, { mensagem: 'Organizacão removida com sucesso' });
    //         }
    //     });
    // }
}

