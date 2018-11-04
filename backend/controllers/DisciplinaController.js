var service = require('../services/Service');
var mongoose = require('mongoose');
var Disciplina = mongoose.model('Disciplina');

module.exports.findAll = function (request, response) {
    Disciplina.find({}).exec(function (error, result) {
        if (error) {
            service.sendJSON(response, 500, error);
        } else {
            service.sendJSON(response, 200, result);
        }
    }); 
}

module.exports.findOne = function (request, response) {
    if (!request.params || !request.params.disciplina_id) {
        service.sendJSON(response, 400, {mensagem: 'Requisição inválida'});
    } else {
        Disciplina.findById(request.params.disciplina_id, function (error, result) {
            if (error) {
                service.sendJSON(response, 500, error);
            } else if (!result || result.length == 0) {
                service.sendJSON(response, 404, {mensagem: 'Nenhuma disciplina localizada'});
            } else {
                service.sendJSON(response, 200, result);
            }
        });
    }
}

module.exports.create = function (request, response) {
    Disciplina.create(request.body, function (error, result) {
        if (error) {
            service.sendJSON(response, 500, error);
        } else {
            service.sendJSON(response, 200, result);
        }
    });
}

module.exports.adicionarCurso = function (request, response) {   
    if (!request.body || !request.body.disciplina_id) {
        service.sendJSON(response, 400, {mensagem: 'Requisição inválida'});
    } else {
        Disciplina.findByIdAndUpdate(request.body.disciplina_id, {$push: {cursos: request.body.curso_id}}).exec(function (error, result) {
            if (error) {
                service.sendJSON(response, 500, error);
            } else {
                service.sendJSON(response, 200, {mensagem: 'Curso adicionado com sucesso'})
            }
        });    
    }
}

module.exports.adicionarDisciplinaRequisito = function (request, response) {
    if (!request.body || !request.body.disciplina_id) {
        service.sendJSON(response, 400, {mensagem: 'Requisição inválida'});
    } else if (request.body.disciplina_id == request.body.disciplina_requisito_id) {
        service.sendJSON(response, 400, {mensagem: 'Disciplina não pode ser requisito dela mesma'});
    } else {
        Disciplina.findByIdAndUpdate(request.body.disciplina_id, {$push: {requisitos: request.body.disciplina_requisito_id}})
        .exec(function (error, result) {
            if (error) {
                service.sendJSON(response, 500, error);
            } else {
                service.sendJSON(response, 200, {mensagem: 'Disciplina requisito adicionada com sucesso'})
            }  
        })
    }
}