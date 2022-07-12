(function() {
    'use strict';

    jvnApp.run(function ($templateCache) {
        $templateCache.put('jvnDualList.html', '<div ng-cloak layout="row" layout-xs="column" class="dualllist"> <div layout="column" flex md-scroll-shrink class="left"> <md-toolbar layout-align="center center" layout="row" class="md-hue-3"> <span>{{options.leftLabel}}</span> </md-toolbar> <div layout="row" layout-align="space-between end"> <md-input-container md-no-float class="md-block" flex> <label> <md-icon>search</md-icon> {{options.leftSearchLabel}} </label> <input type="text" ng-model="searchLeft" ng-disabled="internLeftObject.length < 1"> </md-input-container> <md-checkbox ng-show="internLeftObject.length > 0" class="md-primary" ng-model="leftSelectAll" ng-checked="leftSelectAll" ng-change="selectAllOfLeft()" aria-label="Select All Left"></md-checkbox> </div> <md-content flex layout-padding> <md-list class="md-dense"> <md-list-item ng-class="{active:lm.selected}" ng-repeat="lm in filteredLeftModel = (internLeftObject  | orderBy:options.orderByField | filter:{[options.searchByField] : searchLeft})"> <md-divider></md-divider> <p>{{lm[options.displayedField]}}</p> <md-checkbox class="md-primary" ng-model="lm.selected"></md-checkbox> </md-list-item> </md-list> </md-content> <md-divider></md-divider> <md-subheader class="md-primary"> <div layout="row" layout-align="space-between stretch"> <div ng-show="containsTrue(internLeftObject)">{{(internLeftObject | filter:{\'selected\':true}).length}} {{options.leftSelectFooterLabel}}</div> <div ng-show="searchLeft">{{filteredLeftModel.length}} {{options.leftSearchFooterLabel}}</div> <div>{{internLeftObject.length}} {{options.leftFooterLabel}}</div> </div> </md-subheader> </div> <md-divider></md-divider> <div layout="column" layout-xs="row" layout-align="center center" class="buttons"> <md-button ng-show="containsTrue(internLeftObject)" id="btnMoveRight" ng-click="moveToRight()" class="md-fab md-primary" layout="row"> <md-tooltip md-direction="top">Mover Para Direita</md-tooltip> <md-icon>chevron_right</md-icon> </md-button> <md-button ng-show="containsTrue(internRightObject)" id="btnMoveLeft" ng-click="moveToLeft()" class="md-fab md-primary" layout="row"> <md-tooltip md-direction="top">Mover Para Esquerda</md-tooltip> <md-icon>chevron_left</md-icon> </md-button> </div> <md-divider></md-divider> <div layout="column" flex md-scroll-shrink class="right"> <md-toolbar layout-align="center center" layout="row" class="md-hue-3"> <span>{{options.rightLabel}}</span> </md-toolbar> <div layout="row" layout-align="space-between end"> <md-input-container md-no-float class="md-block" flex> <label> <md-icon>search</md-icon> {{options.rightSearchLabel}} </label> <input type="text" ng-model="searchRight" ng-disabled="internRightObject.length < 1"> </md-input-container> <md-checkbox ng-show="internRightObject.length > 0" class="md-primary" ng-model="rightSelectAll" ng-checked="rightSelectAll" ng-change="selectAllOfRight()" aria-label="Select All Right"></md-checkbox> </div> <md-content flex layout-padding> <md-list class="md-dense"> <md-list-item ng-class="{active:rm.selected}" ng-repeat="rm in filteredRightModel = (internRightObject  | orderBy:options.orderByField |  filter:{[options.searchByField] : searchRight})"> <md-divider></md-divider> <p>{{ rm[options.displayedField] }}</p> <md-checkbox class="md-primary" ng-model="rm.selected"></md-checkbox> </md-list-item> </md-list> </md-content> <md-divider></md-divider> <md-subheader class="md-primary"> <div layout="row" layout-align="space-between stretch"> <div ng-show="containsTrue(internRightObject)">{{(internRightObject | filter:{\'selected\':true}).length}} {{options.rightSelectFooterLabel}}</div> <div ng-show="searchRight">{{filteredRightModel.length}} {{options.rightSearchFooterLabel}}</div> <div> {{internRightObject.length}} {{options.rightFooterLabel}}</div> </div> </md-subheader> </div> </div>');
    });

    jvnApp.directive('jvnDualList', jvnDualList);

    function jvnDualList() {
        var directive = {
            replace: true,
            restrict: 'AE',
            templateUrl: 'jvnDualList.html',
            scope: {
                jvnOptions: '=',
                jvnLeftScope: '=',
                jvnRightScope: '=',
                jvnNewLeftScope: '=',
                jvnNewRightScope: '='
            },
            link: linkFunc
        }

        return directive;

        function linkFunc(scope, elem, attrs) {

            init();

            function init(){          

                //INITIALIZATION
                scope.options = [];
                scope.leftSelectAll = false;
                scope.rightSelectAll = false;
                scope.leftStateInitObject = [];//Used to get the object's original items.
                scope.rightStateInitObject = [];//Used to get the object's original items.
                scope.leftObject = [];//Without the selected control field.
                scope.rightObject = [];//Without the selected control field.
                scope.internLeftObject = [];//Used to insert the selected control field.
                scope.internRightObject = [];//Used to insert the selected control field.

                //GET DATA EXTERN OBJECTS
                scope.options = scope.jvnOptions;
                scope.leftObject = scope.jvnLeftScope;
                scope.rightObject = scope.jvnRightScope;

                //SET DATA INTERN OBJECTS
                scope.leftStateInitObject = angular.copy(scope.jvnLeftScope);
                scope.rightStateInitObject = angular.copy(scope.jvnRightScope);
                scope.internLeftObject = angular.copy(scope.jvnLeftScope);
                scope.internRightObject = angular.copy(scope.jvnRightScope);

                //INSERT PROPERTY FOR CONTROL
                insertOrDeleteProperty(scope.internLeftObject, 'selected', false, 'insert');
                insertOrDeleteProperty(scope.internRightObject, 'selected', false, 'insert');
            }

            scope.selectAllOfLeft = function () {
                selectAll(scope.internLeftObject, scope.leftSelectAll);
            };

            scope.selectAllOfRight = function () {
                selectAll(scope.internRightObject, scope.rightSelectAll);
            };

            scope.moveToRight = function () {
                move(scope.internLeftObject, scope.internRightObject, scope.rightStateInitObject);
                updateExternObjects();
            };


            scope.moveToLeft = function () {
                move(scope.internRightObject, scope.internLeftObject, scope.leftStateInitObject);
                updateExternObjects();
            };


            /*
                *Description of the parameters from left to right
                *@param {contextObject} Model where items will be selected.
                *@param {checkSelectAllContext} Checkbox select all where items will be selected.
                *@return {} No Return.
            */ 
            function selectAll(contextObject, checkSelectAllContext) {
                angular.forEach(contextObject, function (item) {
                    if (checkSelectAllContext) {
                        item.selected = true;
                    } 
                    else {
                        item.selected = false;
                    }
                });
            }

            /*
                *Description of the parameters from left to right
                *@param {fromObject} Model where items come from.
                *@param {toObject} Model where to go.
                *@param {toStateInitObject}  State init model where to go.
                *@return {} Without Return.
            */ 
            function move(fromObject, toObject, toStateInitObject ){

                for (var i = 0; i < fromObject.length; i++) {

                    if (fromObject[i].selected) {

                        fromObject[i].selected = false

                        toObject.push(fromObject[i]);

                        var indexFirst = fromObject.indexOf(fromObject[i]);

                        fromObject.splice(indexFirst, 1);

                        i--
                    }
                }

                scope.leftSelectAll = false;
                scope.rightSelectAll = false;
                updateExternNewItens();
            }

            /*
                *Update intern objects with new itens and both sides.
                *@param {} No params.
                *@return {} No returns.
            */ 
            function updateExternNewItens(){

                scope.jvnNewLeftScope = [];
                scope.jvnNewRightScope = [];

                //CHECK LEFT FOR ADD IN NEW RIGHT
                angular.forEach(scope.leftStateInitObject, function (item) {
                    if(!exists(item, scope.internLeftObject)){
                        scope.jvnNewRightScope.push(item);
                    }
                });

                //CHECK RIGHT FOR ADD IN NEW LEFT
                angular.forEach(scope.rightStateInitObject, function (item) {
                    if(!exists(item, scope.internRightObject)){
                        scope.jvnNewLeftScope.push(item);
                    }
                });
            }

            /*
                *Description of the parameters from left to right
                *@param {pItem} Item to be searched.
                *@param {pList} List where the item will be searched.
                *@return {find} Returns true or false if item found.
            */ 
            function exists(pItem, pList){
                var find = false;

                if(pList.length > 0){

                    for (var i = 0; i < pList.length; i++) {
                        if((pList[i].id==pItem.id) && (pList[i][scope.options.displayedField]==pItem[scope.options.displayedField])){
                            find = true;
                        }             
                    }
                }

                return find;
            }

            /*
                *Description of the parameters from left to right
                *@param {arr} Array to be traversed.
                *@return {bool} Returns true or false if one of the items has the selected true field.
            */ 
            scope.containsTrue = (arr) => arr.some(o => o.selected === true);

            /*
                *Description of the parameters from left to right
                *@param {list} List that will have the property inserted.
                *@param {property} Property that will be inserted.
                *@param {valueDefult} Default value of the inserted property.
                *@param {action} Action to be taken.
                *@return {} No Return.
            */
            function insertOrDeleteProperty(list, property, valueDefult, action){            
                angular.forEach(list, function (item) {
                    if(action=='insert'){
                        item[property] = valueDefult;
                    }
                    else if(action=='delete'){                    
                        delete item[property];
                    }
                });
            }

            /*
                *Update externs objects with values of intern objects.
                *@param {} No Return.
                *@return {} No Return.
            */
            function updateExternObjects(){

                //SET VALUES UPDATED IN EXTERNAL OBJECTS
                scope.jvnLeftScope = angular.copy(scope.internLeftObject);
                scope.jvnRightScope = angular.copy(scope.internRightObject);

                //REMOVE PROPERTY 'SELECTED' OF EXTERNAL OBJECTS
                insertOrDeleteProperty(scope.jvnRightScope, 'selected', null, 'delete');
                insertOrDeleteProperty(scope.jvnRightScope, 'selected', null, 'delete');
            }
        }
    }

})();
