(function() {
    'use strict';

    app.config(appRouter);

    appRouter.$inject = ['$urlRouterProvider', '$stateProvider'];

    function appRouter($urlRouterProvider, $stateProvider) {

        console.log("Routing...");

        $stateProvider
        .state('homeState', {
            url: '/',
            templateUrl: 'scripts/app/modules/home/home.html',
            controller: 'HomeCtrl as homeCtrl'
        })
        .state('menuState', {
            url: '/menu',
            templateUrl: 'scripts/app/modules/menu/menu.html',
            controller: 'MenuCtrl as menuCtrl'
        })
        .state('controleAcessoState', {
            url: '/controleAcesso',
            templateUrl: 'scripts/app/modules/controleAcesso/controleAcesso.html',
            controller: 'ControleAcessoCtrl as caCtrl'
        })
        .state('dataTableState', {
            url: '/dataTable',
            templateUrl: 'scripts/app/modules/dataTable/dataTable.html',
            controller: 'DataTableCtrl as dtCtrl'
        })
        .state('dualListState', {
            url: '/dualList',
            templateUrl: 'scripts/app/modules/dualList/dualList.html',
            controller: 'DualListCtrl as dlCtrl'
        })
        .state('inputFileState', {
            url: '/inputFile',
            templateUrl: 'scripts/app/modules/inputFile/inputFile.html',
            controller: 'InputFileCtrl as ifCtrl'
        })
        .state('loaderState', {
            url: '/loader',
            templateUrl: "scripts/app/modules/loader/loader.html",
            controller: 'LoaderCtrl as loaderCtrl'
        })
        .state("401State", {
            url: '/401',
            templateUrl: "scripts/app/modules/erro/unauthorized.html"
        })
        .state("403State", {
            url: '/403',
            templateUrl: "scripts/app/modules/erro/forbidden.html"
        })
        .state("404State", {
            url: '/404',
            templateUrl: "scripts/app/modules/erro/not_found.html"
        })
        .state("500State", {
            url: '/500',
            templateUrl: "scripts/app/modules/erro/internal_server_error.html"
        })
        .state("502State", {
            url: '/502',
            templateUrl: "scripts/app/modules/erro/bad_gateway.html"
        })
        .state("503State", {
            url: '/503',
            templateUrl: "scripts/app/modules/erro/service_unavailable.html"
        })
        .state("errorState", {
            url: '/error',
            templateUrl: "scripts/app/modules/erro/erro.html"
        })

        $urlRouterProvider.otherwise('/');
    }
})();