var service = require('../services/service');
var mongoose = require('mongoose');

module.exports.findAll = function(request, response) {
    Aluno.find({}, function (error, result){
        if(error) {
            service.sendJSON(response, 500, error);
        } else {
            service.sendJSON(response, 200, result);
        }
    });
}