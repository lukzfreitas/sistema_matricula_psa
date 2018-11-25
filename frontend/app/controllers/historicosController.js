'use strict';
angular.module('historicosController', [])
    .controller('historicosController',
    [
        '$scope',
        '$http',
        '$mdDialog',
        '$mdMedia',
        '$location',
        'formatDateService',
        'Historicos', function ($scope, $http, $mdDialog, $mdMedia, $location, formatDateService, Historicos) {
            $scope.titulo = 'Históricos';            

            // =============================================================================
            // Todas Historicos ============================================================
            // =============================================================================
            Historicos.get().success(function (data) {                
                $scope.historicos = data;
            });

        }]);