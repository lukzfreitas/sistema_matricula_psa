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
    .when("/", {
        controller: "disciplinasController",
        templateUrl: "app/views/disciplinas.html"       
    })    
    .when("/turmas", {
        controller: "turmasController",
        templateUrl: "app/views/turmas.html",        
    })
    .when("/historicos", {
        controller: "historicosController",
        templateUrl: "app/views/historicos.html",        
    })    
    // .when("/voluntarios", {
    //     controller: "voluntariosController",
    //     templateUrl: "app/views/voluntarios.html"
    // })
    // .when("/oportunidades", {
    //     controller: "oportunidadesController",
    //     templateUrl: "app/views/oportunidades.html"
    // })
    // .when("/nova-organizacao", {
    //     controller: "organizacoesController",
    //     templateUrl: "app/views/novaOrganizacao.html"
    // })
    // .when("/novo-voluntario", {
    //     controller: "voluntariosController",
    //     templateUrl: "app/views/novoVoluntario.html"
    // })    
    // .when("/nova-oportunidade", {
    //     controller: "oportunidadesController",
    //     templateUrl: "app/views/novaOportunidade.html"
    // })    
    .otherwise({redirectTo: "/"});
    $mdIconProvider.icon('md-close', 'img/icons/ic_close_24px.svg', 24);
    $mdIconProvider.fontSet('md', 'material-icons');
});

