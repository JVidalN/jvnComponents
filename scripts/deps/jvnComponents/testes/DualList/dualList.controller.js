(function() {
    'use strict';

    app.controller("dualListCtrl", function($scope, $filter) { 

        var vm = this;

        init();

        function init(){            

            //INITIALIZATION
            vm.leftSelectAll = false;
            vm.rightSelectAll = false;
            vm.leftStateInitObject = [];//Used to get the object's original items.
            vm.rightStateInitObject = [];//Used to get the object's original items.
            vm.leftObject = [];//Without the selected control field.
            vm.rightObject = [];//Without the selected control field.
            vm.internLeftObject = [];//Used to insert the selected control field.
            vm.internRightObject = [];//Used to insert the selected control field.

            //GET DATA EXTERN OBJECTS
            vm.options = {
                orderByField: 'descricao',//Sort by field described.
                searchByField: 'descricao',//Search by field described.
                displayedField: 'descricao',//Field displayed in list.
                leftLabel: 'Disponíveis',
                rightLabel: 'Associados',
                leftSearchLabel: 'Buscar Disponíveis',
                rightSearchLabel: 'Buscar Associados',
                leftSearchFooterLabel: ' encontrado(s)',
                rightSearchFooterLabel: ' encontrado(s)',
                leftSelectFooterLabel: ' selecionado(s)',
                rightSelectFooterLabel: ' selecionado(s)',
                leftFooterLabel: ' registro(s)',
                rightFooterLabel: ' registro(s)'
            };
            
            vm.leftObject = [
                {
                    id: '1',
                    descricao: 'ADMINISTRADOR'
                },            
                {
                    id: '2',
                    descricao: 'ANALISTA JUNIOR'
                },            
                {
                    id: '3',
                    descricao: 'ANALISTA SENIOR'
                }
                ,            
                {
                    id: '4',
                    descricao: 'ANALISTA PLENO'
                },            
                {
                    id: '5',
                    descricao: 'ASSISTENTE I'
                },            
                {
                    id: '6',
                    descricao: 'ASSISTENTE II'
                },            
                {
                    id: '7',
                    descricao: 'ASSISTENTE III'
                },            
                {
                    id: '8',
                    descricao: 'ESTAGIÁRIO'
                },            
                {
                    id: '9',
                    descricao: 'TESTER'
                },            
                {
                    id: '10',
                    descricao: 'DESENVOLVEDOR FRONT END'
                },            
                {
                    id: '11',
                    descricao: 'DESENVOLVEDOR BACK END'
                },            
                {
                    id: '12',
                    descricao: 'DESENVOLVEDOR FULL STACK'
                }
            ];

            vm.rightObject = [
                {
                    id: '13',
                    descricao: 'DBA JUNIOR'
                },            
                {
                    id: '14',
                    descricao: 'DBA SENIOR'
                },            
                {
                    id: '15',
                    descricao: 'DBA PLENO'
                }
            ];

            //SET DATA INTERN OBJECTS
            vm.leftStateInitObject = angular.copy(vm.leftObject);
            vm.rightStateInitObject = angular.copy(vm.rightObject);
            vm.internLeftObject = angular.copy(vm.leftObject);
            vm.internRightObject = angular.copy(vm.rightObject);

            //INSERT PROPERTY FOR CONTROL
            insertOrDeleteProperty(vm.internLeftObject, 'selected', false, 'insert');
            insertOrDeleteProperty(vm.internRightObject, 'selected', false, 'insert');
        }

        vm.selectAllOfLeft = function () {
            selectAll(vm.internLeftObject, vm.leftSelectAll);
        };

        vm.selectAllOfRight = function () {
            selectAll(vm.internRightObject, vm.rightSelectAll);
        };

        vm.moveToRight = function () {
            move(vm.internLeftObject, vm.internRightObject, vm.rightStateInitObject);
            updateExternObjects();
        };

        vm.moveToLeft = function () {
            move(vm.internRightObject, vm.internLeftObject, vm.leftStateInitObject);
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

            vm.leftSelectAll = false;
            vm.rightSelectAll = false;
            updateNewItens();
        }

        /*
            *Update intern objects with new itens and both sides.
            *@param {} No params.
            *@return {} No returns.
        */ 
        function updateNewItens(){
          
            vm.newLeftObject = [];
            vm.newRightObject = [];

            //CHECK LEFT FOR ADD IN NEW RIGHT
            angular.forEach(vm.leftStateInitObject, function (item) {
                if(!exists(item, vm.internLeftObject)){
                    vm.newRightObject.push(item);
                }
            });

            //CHECK RIGHT FOR ADD IN NEW LEFT
            angular.forEach(vm.rightStateInitObject, function (item) {
                if(!exists(item, vm.internRightObject)){
                    vm.newLeftObject.push(item);
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
                    if((pList[i].id==pItem.id) && (pList[i][vm.options.displayedField]==pItem[vm.options.displayedField])){
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
        vm.containsTrue = (arr) => arr.some(o => o.selected === true);

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
            *Update externs objects with equals intern objects.
            *@param {} No Return.
            *@return {} No Return.
        */
        function updateExternObjects(){

            //SET VALUES UPDATED IN EXTERNAL OBJECTS
            vm.leftObject = angular.copy(vm.internLeftObject);
            vm.rightObject = angular.copy(vm.internRightObject);

            //REMOVE PROPERTY 'SELECTED' OF EXTERNAL OBJECTS
            insertOrDeleteProperty(vm.leftObject, 'selected', null, 'delete');
            insertOrDeleteProperty(vm.rightObject, 'selected', null, 'delete');
            // insertOrDeleteProperty(vm.newLeftObject, 'selected', null, 'delete');
            // insertOrDeleteProperty(vm.newRightObject, 'selected', null, 'delete');
        }

    });

})();