var app = angular.module('app', [    
    'ngMaterial',    
    'ngRoute',    
    'ngResource',   
    'ngMessages',
    'service',        
    'alunosController',        
    'coordenadoresController',
    'ui.mask',
]);     

app.config (function ($routeProvider, $mdIconProvider) {    
    $routeProvider    
    .when("/alunos", {
        controller: "alunosController",
        templateUrl: "app/views/alunos.html"       
    })        
    .when("/coordenadores", {
        controller: "coordenadoresController",
        templateUrl: "app/views/coordenadores.html"       
    })        
    .otherwise({redirectTo: "/"});
    $mdIconProvider.icon('md-close', 'img/icons/ic_close_24px.svg', 24);
    $mdIconProvider.fontSet('md', 'material-icons');
});

