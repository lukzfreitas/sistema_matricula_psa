var app = angular.module('app', [    
    'ngMaterial',    
    'ngRoute',    
    'ngResource',   
    'ngMessages',
    'service',    
    'disciplinasController',    
    'turmasController',
    'historicosController',
    'modalRequisitosDisciplinaController',
    'ui.mask',
]);     

app.config (function ($routeProvider, $mdIconProvider) {    
    $routeProvider    
    .when("/profile", {
        controller: "turmasController",
        templateUrl: "app/views/profile.html"       
    })    
    .when("/turmas", {
        controller: "disciplinasController",
        templateUrl: "app/views/disciplinas.html",        
    })    
    .otherwise({redirectTo: "/"});
    $mdIconProvider.icon('md-close', 'img/icons/ic_close_24px.svg', 24);
    $mdIconProvider.fontSet('md', 'material-icons');
});

