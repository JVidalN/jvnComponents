(function () {
    'use strict';

    app.controller("MenuCtrl",MenuCtrl);

    MenuCtrl.$inject = ['$scope', '$mdSidenav', '$timeout', 'menuAPI'];

    function MenuCtrl($scope, $mdSidenav, $timeout, menuAPI) {

        console.log("Entrei no MenuCtrl!");

        var vm = this;

        vm.dataMenu = [
          {
              id: 1,
              descricao: 'Menu 1',
              link: '',
              pai: 0,
              icon: 'settings'
          },
          {
              id: 2,
              descricao: 'Menu 2',
              link: '',
              pai: 0,
              icon: 'settings'
          },
          {
              id: 3,
              descricao: 'Menu 3',
              link: '',
              pai: 0,
              icon: 'settings'
          },
          {
              id: 4,
              descricao: 'Sub Menu 1',
              link: '',
              pai: 3,
              icon: 'settings'
          },
          {
              id: 5,
              descricao: 'Sub Menu 2',
              link: '',
              pai: 3,
              icon: 'settings'
          },
          {
              id: 6,
              descricao: 'Menu 4',
              link: '',
              pai: 0,
              icon: 'settings'
          },
          {
              id: 7,
              descricao: 'Menu 5',
              link: '',
              pai: 0,
              icon: 'settings'
          }
        ];

        //INICIO CÓDIGO PARA ABRIR OU FECHAR O SIDENAV (Menu fica dentro do SideNav)
        function buildToggler(componentId) {
          	return function() {
            	$mdSidenav(componentId).toggle();
          	};
        }

        vm.toggleLeft = buildToggler('left_sample');
        //FIM CÓDIGO PARA ABRIR OU FECHAR O SIDENAV (Menu fica dentro do SideNav)    
    }
})();