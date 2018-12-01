angular.module('service', [])
.factory('Aluno', ['$http', function($http){
    return {
        get : function() {
            return $http.get('/aluno');
        }
    }
}]
).factory('Turmas', ['$http', function($http){
    return {        
        get : function() {                        
            return $http.get('/turmas');
        },
        matricularSe: function (turma) {
            return $http.post('/turmas/matricular-se', turma);  
        },
        cancelarMatricula: function (turma) {
            return $http.post('/turmas/cancelar-matricula', turma);  
        }            
    }
}]
).factory('formatDateService', function () {
    return {
        formatDate : function (date) {
            var dateFormat = date.slice(0, 10).split('-');
            return dateFormat[2] + '/' + dateFormat[1] + '/' + dateFormat[0];
        }        
    }
})