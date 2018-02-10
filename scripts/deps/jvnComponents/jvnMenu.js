(function() {
    'use strict';

    jvnApp.run(function ($templateCache) {
        $templateCache.put('/view/jvnMenu.html', '<md-content class="main-ctr md-padding"> <div class="order" style="font-size: 80%;" align="center"> <span>Ordenar:</span> <span style="font-size: 85%;"><a id="padrao" ng-class="{\'negrito\':ordenacaoPadrao}" href="" ng-click="ordenar(true)">Padrão</a> | <a id="alfabetico" ng-class="{\'negrito\':!ordenacaoPadrao}" href="" ng-click="ordenar(false)">Alfabeticamente</a></span> </div> <div ng-show="mainMenu" class="mainmenu"> <md-list> <md-divider /> <md-list-item ng-repeat="menu in menudata" ng-if="menu.pai == 0" ui-sref="{{menu.link ? menu.link:\'\'}}" ui-sref-active="negrito" ng-click="ifClickMenu(menu)"> <md-icon>{{menu.icon}}</md-icon> <p class="md-body-2 side-nav-item">{{menu.descricao}}</p> <md-button ng-if="!menu.link" class="md-secondary md-icon-button" ng-click="nav(menu.id)"> <md-icon>chevron_right</md-icon> </md-button> </md-list-item> <md-divider /></md-list> </div> <div ng-if="menu.pai == 0 && !menu.link" ng-repeat="menu in menudata"> <div ng-show="showsubmenu(menu.id)" ng-class="{donotshow:donotshow, submenu: true}"> <md-list> <md-divider /> <md-list-item ng-click="nav(true)"> <md-icon ng-click="nav(true)">chevron_left</md-icon> <p class="md-body-2 side-nav-item">Voltar</p> </md-list-item> <md-divider /> <md-list-item ng-if="submenu.pai == menu.id" ui-sref="{{submenu.link}}" ui-sref-active="negrito" ng-repeat="submenu in menudata" ng-click="toggleLeft()"> <md-icon>{{submenu.icon}}</md-icon> <p class="md-body-2 side-nav-item">{{submenu.descricao}}</p> </md-list-item> <md-divider /> </md-list> </div> </div> </md-content>');
    });

    jvnApp.directive('jvnMenu', jvnMenu);

    jvnMenu.$inject = ['$mdSidenav', '$filter'];

    function jvnMenu($mdSidenav, $filter) {
        var directive = {
            restrict: 'AE',
            scope: {
                menudata: '=jvnMenuData'
            },
            replace: true,
            templateUrl: '/view/jvnMenu.html',
            link: linkFunc
        }

        return directive;

        function linkFunc(scope, element, attrs){  

    	    scope.$watch(function () {return [scope.menudata,attrs.ordenacaoPadrao];}, function(newVal, oldVal, scope) {

                //NAGEVAÇÃO DO MENU
                scope.mainMenu = true;
                scope.donotshow = true;
                scope.ordenacaoPadrao = true;
                scope.submenus = [];
                var dmenu = scope.menudata;

                if (dmenu !== undefined){
            
		            populateSubMenuArray(dmenu,scope.submenus);

			        //INICIO CÓDIGO PARA ABRIR OU FECHAR O SIDENAV (Menu fica dentro do SideNav)
		            function buildToggler(componentId) {
		                return function() {
		                  $mdSidenav(componentId).toggle();
		                };
		            }

		            scope.toggleLeft = buildToggler('left'); 
			        //FIM CÓDIGO PARA ABRIR OU FECHAR O SIDENAV (Menu fica dentro do SideNav)

		  	        scope.ordenar = function(optPadrao){
		    	        if(optPadrao){
		      		        scope.ordenacaoPadrao = optPadrao;
		      		        scope.menudata = $filter('orderBy')(scope.menudata, 'id');
		      		        scope.toggleLeft();
		      		        scope.toggleLeft();
			            }
			            else
			            {
			      	        scope.ordenacaoPadrao = optPadrao;
			      	        scope.menudata = $filter('orderBy')(scope.menudata, 'descricao');		
			      	        scope.toggleLeft();
			      	        scope.toggleLeft();
			            }
		  	        }

		            scope.ifClickMenu = function(pdmenu){
		                if(pdmenu.link){
		                    scope.toggleLeft();
		                }
		                else
		                {
		                    scope.nav(pdmenu.id);
		                }
		            }

		            scope.nav = function(navigation) {
		                scope.donotshow = false;
		                if (navigation == true) {
		                    scope.mainMenu = true;            
		                    for (var i = 0; i < scope.submenus.length; i++) {
		                        scope.submenus[i].status  = false;  
		                    }
		                }
		                else
		                {
		                    scope.mainMenu = false;
		                    for (var i = 0; i < scope.submenus.length; i++) {
		                        if (navigation == scope.submenus[i].idPai) {
		                            scope.submenus[i].status  = true;
		                        }                
		                    }
		                }
		      
		            }

		            scope.showsubmenu = function(idSubMenu){
		                var submenus = scope.submenus;
		                for (var i = 0; i < submenus.length; i++) {
		                    if (idSubMenu == submenus[i].idPai && submenus[i].status)
		                    {
		                        return true;
		                    }                
		                }
		                return false;
		            }

		            function populateSubMenuArray(pdmenu, submenu){
		                for (var i=0; i < pdmenu.length; i++) {
		                    if(pdmenu[i].pai != 0 && !containsIdPai(submenu,pdmenu[i].pai)){
		                        submenu.push({
		                            id: pdmenu[i].id,
		                            idPai: pdmenu[i].pai,
		                            status: false
		                        });
		                    }
		                }
		             }

		            function containsIdPai(array,value) {
		                var doescontain = false;
		                array.forEach(function(element) {
		                    if (element.idPai == value)
		                    {
		                        doescontain = true;
		                    }
		                },this);
		                return doescontain;
		            }
                }
     	    },true);
        }
    }
})();