'use strict';
angular.module('turmasController', [])
    .controller('turmasController',
        [
            '$scope',
            '$http',
            '$mdDialog',
            '$mdMedia',
            '$location',
            '$q',
            'formatDateService',
            'Turmas', function ($scope, $http, $mdDialog, $mdMedia, $location, $q, formatDateService, Turmas) {
                $scope.titulo = 'Turmas';

                // =============================================================================
                // Todas Turmas ================================================================
                // =============================================================================
                Turmas.get().success(function (data) {
                    $scope.turmas = data;
                    const iMaxNum = 6
                    var i, j;
                    $scope.matriz = new Array(iMaxNum + 1);
                    for (i = 2; i <= iMaxNum; i++) {
                        $scope.matriz[i] = new Array(2);
                        for (j = 1; j <= 2; j++) {
                            $scope.matriz[i][j] = '---';
                        }
                    }
                });

                // =============================================================================
                // Verifica se está matriculado em horário =====================================
                // =============================================================================
                const isMatriculado = function (turma) {
                    var deferred = $q.defer();
                    var horarios = turma.horario.split(" ");
                    var matriculado = false;
                    horarios.forEach(horario => {
                        var dia = parseInt(horario.charAt(0));
                        var hora = horario.substring(1, horario.length);
                        if (hora == "LM") {
                            if ($scope.matriz[dia][1] !== "---") {
                                $mdDialog.show(
                                    $mdDialog.alert()
                                        .parent(angular.element(document.querySelector('#popupContainer')))
                                        .clickOutsideToClose(true)
                                        .textContent('Horário já matriculado.')
                                        .ok('Fechar')
                                );
                                matriculado = true;
                            }
                        } else {
                            if ($scope.matriz[dia][2] !== "---") {
                                $mdDialog.show(
                                    $mdDialog.alert()
                                        .parent(angular.element(document.querySelector('#popupContainer')))
                                        .clickOutsideToClose(true)
                                        .textContent('Horário já matriculado.')
                                        .ok('Fechar')
                                );
                                matriculado = true;
                            }
                        }
                    });
                    deferred.resolve(matriculado);
                    return deferred.promise;
                }

                // =============================================================================
                // Matricular-se ===============================================================
                // =============================================================================
                $scope.matricularSe = function (index, turma) {
                    var turmaMatriculada = { codCred: turma.codCred, numeroTurma: turma.numeroTurma };

                    var promise = isMatriculado(turma);

                    promise.then(function (jaMatriculado) {

                        if (jaMatriculado) return;

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

                            var horarios = result.horario.split(" ");
                            horarios.forEach(horario => {
                                var dia = parseInt(horario.charAt(0));
                                var hora = horario.substring(1, horario.length);
                                if (hora == "LM") {
                                    $scope.matriz[dia][1] = result.codCred;
                                } else {
                                    $scope.matriz[dia][2] = result.codCred;
                                }
                            });
                        });
                    });
                }

                // =============================================================================
                // Cancelar Matrícula ==========================================================
                // =============================================================================
                $scope.cancelarMatricula = function (index, turma) {
                    var turmaCancelada = { codCred: turma.codCred, numeroTurma: turma.numeroTurma };
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

                        var horarios = result.horario.split(" ");
                        horarios.forEach(horario => {
                            var dia = parseInt(horario.charAt(0));
                            var hora = horario.substring(1, horario.length);
                            if (hora == "LM") {
                                $scope.matriz[dia][1] = "---";
                            } else {
                                $scope.matriz[dia][2] = "---";
                            }
                        });
                    })
                }
            }]);