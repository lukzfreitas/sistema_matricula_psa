'use strict';
angular.module('turmasController', [])
    .controller('turmasController',
    [
        '$scope',
        '$http',
        '$mdDialog',
        '$mdMedia',
        '$location',
        'formatDateService',
        'Turmas', function ($scope, $http, $mdDialog, $mdMedia, $location, formatDateService, Turmas) {
            $scope.titulo = 'Turmas';            

            // =============================================================================
            // Todas Turmas ================================================================
            // =============================================================================
            Turmas.get().success(function (data) {                
                $scope.turmas = data;
            });

            $scope.matricularSe = function (index, turmas, turma) {
                var turmaMatriculada = {codCred: turma.codCred, numeroTurma: turma.numeroTurma};
                
                Turmas.matricularSe(turmaMatriculada).success(function (result) {                    
                    
                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)                        
                        .textContent('Matrícula realizada com sucesso.')                        
                        .ok('Fechar')                        
                    );                    
                    $scope.turmas[index].vagas = result.vagas - 1;                    
                    $scope.turmas[index].matriculado = true;
                })
            }

            $scope.cancelarMatricula = function (index, turmas, turma) {
                var turmaCancelada = {codCred: turma.codCred, numeroTurma: turma.numeroTurma};
                Turmas.cancelarMatricula(turmaCancelada).success(function (result) {
                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)                        
                        .textContent('Matrícula cancelada com sucesso.')                        
                        .ok('Fechar')                        
                    );
                    $scope.turmas[index].vagas = result.vagas + 1;                    
                    $scope.turmas[index].matriculado = false;
                })
            }
        }]);