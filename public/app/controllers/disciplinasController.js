'use strict';
angular.module('disciplinasController', [])
    .controller('disciplinasController',
        [
            '$scope',
            '$http',
            '$mdDialog',
            '$mdMedia',
            '$location',
            'formatDateService',
            'Disiciplinas', function ($scope, $http, $mdDialog, $mdMedia, $location, formatDateService, Disciplinas) {
                $scope.titulo = 'Disciplinas';

                // =============================================================================
                // Todas Disciplinas ===========================================================
                // =============================================================================
                Disciplinas.get().success(function (data) {
                    $scope.disciplinas = data;
                });

                // =============================================================================
                // Abre Modal de requisitos ====================================================
                // =============================================================================
                $scope.requisitos = function (codCred) {
                    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
                    $mdDialog.show({
                        controller: 'modalRequisitosDisciplinaController',
                        templateUrl: 'app/views/modalRequisitosDisciplina.html',
                        parent: angular.element(document.body),
                        resolve: {
                            requisitoModal: function () {
                                return {
                                    codCred: codCred
                                };
                            }
                        },
                        clickOutsideToClose: true,
                        fullscreen: useFullScreen
                    })
                        .then(function (answer) {
                            $scope.status = 'You said the information was "' + answer + '".';
                        }, function () {
                            $scope.status = 'You cancelled the dialog.';
                        });
                    $scope.$watch(function () {
                        return $mdMedia('xs') || $mdMedia('sm');
                    }, function (wantsFullScreen) {
                        $scope.customFullscreen = (wantsFullScreen === true);
                    });
                }

            }]);