var service = require('../services/service');
var mongoose = require('mongoose');
var Disciplina = mongoose.model('Disciplina');
var Historico = mongoose.model('Historico');

module.exports.findAll = function (request, response) {
    Disciplina.find({}, function (error, result) {
        if (error) {
            service.sendJSON(response, 500, error);
        } else {
            service.sendJSON(response, 200, result);
        }
    });
}

