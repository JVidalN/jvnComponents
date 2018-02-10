(function () {
    'use strict';

    app.controller("DataTableCtrl", DataTableCtrl);

    DataTableCtrl.$inject = ['$scope', '$timeout', 'dataTableAPI'];

    function DataTableCtrl($scope, $timeout, dataTableAPI) {

        console.log("Entrei no DataTableCtrl!");

        var vm = this;

        vm.data = [];

        load();

        function load(){
            
            var promiseGet = dataTableAPI.getData();

            promiseGet.then(function (pl) {
                vm.data = pl.data;
                loadDataTable();
            }, function (errorPl) {
                $scope.error = 'falha ao tentar carregar os registros', errorPl;
            });
        }        

        function loadDataTable(){
            vm.configDt = {
                title: 'jvnComponents DataTable Sample',
                data: vm.data,
                selected : [],
                options : {
                    searchBar: true,
                    advancedButton: true,
                    rowSelection: false,
                    multiSelect: false,
                    autoSelect: false,
                    decapitate: false,
                    boundaryLinks: true,
                    limitSelect: true,
                    pageSelect: true,
                    deleteAllSelect: true,
                    exportation: {excel: true, word: true, pdf: true},
                    showActions: true
                },
                columnDefs: [{
                    field: 'text',
                    displayName: 'Text Value',
                    sortable: true,
                    columnEditable: false,
                    numeric: false,
                    percent: false,
                    currency: false
                },
                {
                    field: 'number',
                    displayName: 'Number Value',
                    sortable: true,
                    columnEditable: false,
                    numeric: false,
                    percent: false,
                    currency: false,
                    boolean: false
                },
                {
                    field: 'numeric',
                    displayName: 'Numeric Value',
                    sortable: true,
                    columnEditable: false,
                    numeric: true,
                    percent: false,
                    currency: false
                },
                {
                    field: 'percent',
                    displayName: 'Percent Value',
                    sortable: true,
                    columnEditable: false,
                    numeric: false,
                    percent: true,
                    currency: false,
                    boolean: false
                },
                {
                    field: 'currency',
                    displayName: 'Currency Value',
                    sortable: true,
                    columnEditable: false,
                    numeric: false,
                    percent: false,
                    currency: true
                },
                {
                    field: 'column_editable',
                    displayName: 'Column Editable Value',
                    sortable: true,
                    columnEditable: true,
                    numeric: false,
                    percent: false,
                    currency: false
                },
                {
                    field: 'column_not_sortable',
                    displayName: 'Column Not Sortable',
                    sortable: false,
                    columnEditable: false,
                    numeric: false,
                    percent: false,
                    currency: false
                },
                {
                    field: 'column_action',
                    displayName: 'Column Actions Showed',
                    sortable: true,
                    columnEditable: false,
                    numeric: false,
                    percent: false,
                    currency: false
                }],
                pager: { query : { order: 'id', limit: 5, page: 1 }, limitOptions : [5, 10, 15]},
                loadStuff: function () {
                    $scope.promise = $timeout(function () {
                      console.log("DataTable Recarregada");
                      // loading
                    }, 2000);
                },
                logOrder: function (order) {
                    console.log('ordenação: ', order);
                },
                logPagination: function (page, limit) {
                    console.log('página: ', page);
                    console.log('limite: ', limit);
                },
                rowSelectClick: function (row) {
                    console.log(row.id, 'foi selecionado');
                },
                fActions: [
                    {
                        actModel: 'view',
                        actName: 'Visualizar',
                        actIcon: 'search',
                        actShow: true,
                        actFunction: function(ev,row) { execAction(row, ' visualizada !'); }
                    },
                    {
                        actModel: 'edit',
                        actName: 'Editar',
                        actIcon: 'edit',
                        actShow: true,
                        actFunction: function(ev,row) { execAction(row, ' editada !'); },
                    },
                    {
                        actModel: 'delete',
                        actName: 'Deletar',
                        actIcon: 'delete',
                        actShow: true,
                        actFunction: function(ev,row) { execAction(row, ' deletada !'); }
                    }
                ]
            };
        }

        function execAction(data, action){
            console.log('Line id: '+ data.id + action + ' !');
        } 
    }

})();