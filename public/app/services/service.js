angular.module('service', [])
// Cada function retorna um objeto promise
.factory('Disiciplinas', ['$http', function($http){    
    return {        
        get : function() {                        
            return $http.get('/api/disciplinas');
        }
        // create : function(data) {
        //     return $http.post('/api/organizacoes', data);
        // },
        // update : function(data) {
        //     return $http.put('/api/organizacoes', data);
        // },                        
        // delete : function(id) {
        //     return $http.delete('/api/organizacoes/' + id);
        // },
        // findByCNPJ : function(cnpj) {            
        //     return $http.get('/api/organizacoes?cnpj=' + cnpj);
        // },
        // findByAreaInteresse : function(area_interesse) {
        //     return $http.get('/api/organizacoes?area_interesse=' + area_interesse);
        // }        
    }
}]
).factory('Turmas', ['$http', function($http){
    return {        
        get : function() {                        
            return $http.get('/api/turmas');
        },
        matricularSe: function (turma) {
            return $http.post('/api/turmas/matricular-se', turma);  
        },
        cancelarMatricula: function (turma) {
            return $http.post('/api/turmas/cancelar-matricula', turma);  
        }            
    }
}]
).factory('Historicos', ['$http', function($http){
    return {        
        get : function() {                        
            return $http.get('/api/historicos');
        },
//         findOne : function(id) {
//             return $http.get('api/oportunidades/' + id);
//         },
//         create : function(data) {
//             return $http.post('/api/oportunidades', data);
//         },
//         update : function(data) {
//             return $http.put('/api/oportunidades', data);
//         },                        
//         delete : function(id) {
//             return $http.delete('/api/oportunidades/' + id);
//         },  
//         findByAreaInteresse : function(area_interesse) {
//             return $http.get('/api/oportunidades?area_interesse=' + area_interesse);
//         }
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