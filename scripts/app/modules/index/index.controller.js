(function () {
    'use strict';

    app.controller("IndexCtrl", IndexCtrl);

    IndexCtrl.$inject = ['$scope', '$state', '$mdSidenav', '$timeout', 'Page', 'controleAcessoAPI'];

    function IndexCtrl($scope, $state, $mdSidenav, $timeout, Page, controleAcessoAPI) {

        console.log("Entrei no IndexCtrl!");

        var vm = this;

        vm.date = new Date();
        vm.actualTheme = 'jvn2018';
        vm.nomeDoSistema = "JVN Components";

        //USO DE SCOPE PARA MANTER O VALOR SEMPRE ATUALIZADO
         $scope.page = Page;

         Page.setTitle(vm.nomeDoSistema);
        
        vm.dataMenu = [
            {
                id: 1,
                descricao: 'Home',
                link: 'homeState',
                pai: 0,
                icon: 'home'
            },
            {
                id: 2,
                descricao: 'Menu',
                link: 'menuState',
                pai: 0,
                icon: 'list'
            },
            {
                id: 3,
                descricao: 'Controle de Acesso',
                link: 'controleAcessoState',
                pai: 0,
                icon: 'fingerprint'
            },
            {
                id: 4,
                descricao: 'Data Table',
                link: 'dataTableState',
                pai: 0,
                icon: 'web'
            },
            {
                id: 5,
                descricao: 'Dual List',
                link: 'dualListState',
                pai: 0,
                icon: 'format_list_bulleted'
            },
            {
                id: 6,
                descricao: 'InputFile',
                link: 'inputFileState',
                pai: 0,
                icon: 'open_in_browser'
            },
            {
                id: 7,
                descricao: 'Loader',
                link: 'loaderState',
                pai: 0,
                icon: 'cached'
            },
            {
                id: 8,
                descricao: 'Tree View',
                link: 'treeViewState',
                pai: 0,
                icon: 'device_hub'
            }
        ];
          
        vm.SourceAccessControl = [];

        //INICIO CÓDIGO PARA ABRIR OU FECHAR O SIDENAV (Menu fica dentro do SideNav)
            function buildToggler(componentId) {
              return function() {
                $mdSidenav(componentId).toggle();
              };
            }

            vm.toggleLeft = buildToggler('left');
        //FIM CÓDIGO PARA ABRIR OU FECHAR O SIDENAV (Menu fica dentro do SideNav)    
    }
})();