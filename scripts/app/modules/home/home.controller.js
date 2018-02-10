(function () {
    'use strict';

    app.controller("HomeCtrl",HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$mdSidenav', '$timeout', 'homeAPI'];

    function HomeCtrl($scope, $mdSidenav, $timeout, homeAPI) {
      
        console.log("Entrei no HomeCtrl!");

        var vm = this;

        vm.date = new Date();
        vm.actualTheme = 'jvn-2018';

        vm.nomeDoSistema = "JVN Components";
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
          }
        ];

        console.log("Carregou menu...");

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