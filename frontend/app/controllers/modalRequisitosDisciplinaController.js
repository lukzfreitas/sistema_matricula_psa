'use strict';
angular.module('modalRequisitosDisciplinaController', [])
    .controller('modalRequisitosDisciplinaController', 
    [
        '$scope',
        '$http', 
        '$mdDialog', 
        'Requisitos',
        'requisitoModal', function ($scope, $http, $mdDialog, Requisitos, requisitoModal) {
        $scope.codCred = requisitoModal.codCred;
        $scope.disciplinasRequisitos = [];

        $scope.cancel = function () {
            $mdDialog.cancel();
        }

        Requisitos.getByCodCred($scope.codCred).success(function (data) {            
            $scope.disciplinasRequisitos = data;
        });       
        
    }]);