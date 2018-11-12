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

        }]);