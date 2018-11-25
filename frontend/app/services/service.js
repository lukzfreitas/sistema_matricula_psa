angular.module('service', [])

.factory('Disiciplinas', ['$http', function($http){    
    return {        
        get : function() {                        
            return $http.get('/api/disciplinas');
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
).factory('Historicos', ['$http', function($http){
    return {        
        get : function() {                        
            return $http.get('/api/historicos');
        }
    }
}]
).factory('Requisitos', ['$http', function($http){
    return {
        getByCodCred: function(codCred) {
            return $http.get('/api/requisitos/' + codCred);
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