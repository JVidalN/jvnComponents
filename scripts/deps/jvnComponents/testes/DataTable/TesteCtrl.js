(function() {
    'use strict';

    angular.module("ccoApp").controller("TesteController", function ($scope, $timeout, $filter) {


        $scope.$parent.tituloMenu = "Testes"; 

        var scriptjS1 = document.createElement("script");
        scriptjS1.type = "text/javascript";
        scriptjS1.src = "lib/js/jvnComponents/references/md-data-table/js/md-data-table.js";
        $("head").append(scriptjS1);

        var scriptjS2 = document.createElement("script");
        scriptjS2.type = "text/javascript";
        scriptjS2.src = "lib/js/jvnComponents/references/file-saver/js/1.3.2/FileSaver.js";
        $("head").append(scriptjS2);

        var linkCss1 = angular.element('<link rel="stylesheet" href="lib/js/jvnComponents/references/md-data-table/css/md-data-table.css">');
        $("head").append(linkCss1);

        var linkCss2 = angular.element('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');
        $("head").append(linkCss2);

        $scope.dadosJvnDataSource = [
          {
            "id": 1,
            "text": "Text Sample 1",
            "number": 0.01,
            "numeric": 0.01,
            "percent": 0.01,
            "currency": 0.01,
            "column_editable": "Column Editable 1",
            "column_not_sortable": "Column Not Sortable 1",
            "column_action": "View, Edit, Delete",
            "view": true,
            "edit": true,
            "delete": true
          }, {
            "id": 2,
            "text": "Text Sample 2",
            "number": 0.22,
            "numeric": 0.22,
            "percent": 0.22,
            "currency": 0.22,
            "column_editable": "Column Editable 2",
            "column_not_sortable": "Column Not Sortable 2",
            "column_action": "None",
            "view": false,
            "edit": false,
            "delete": false
          }, {
            "id": 3,
            "text": "Text Sample 3",
            "number": 3.33,
            "numeric": 3.33,
            "percent": 3.33,
            "currency": 3.33,
            "column_editable": "Column Editable 3",
            "column_not_sortable": "Column Not Sortable 3",
            "column_action": "View, Delete",
            "view": true,
            "edit": false,
            "delete": true
          }, {
            "id": 4,
            "text": "Text Sample 4",
            "number": 44.44,
            "numeric": 44.44,
            "percent": 44.44,
            "currency": 44.44,
            "column_editable": "Column Editable 4",
            "column_not_sortable": "Column Not Sortable 4",
            "column_action": "View, Edit",
            "view": true,
            "edit": true,
            "delete": false
          }, {
            "id": 5,
            "text": "Text Sample 5",
            "number": 555.55,
            "numeric": 555.55,
            "percent": 555.55,
            "currency": 555.55,
            "column_editable": "Column Editable 5",
            "column_not_sortable": "Column Not Sortable 5",
            "column_action": "Edit, Delete",
            "view": false,
            "edit": true,
            "delete": true,
        
          }, {
            "id": 6,
            "text": "Text Sample 6",
            "number": 6666.66,
            "numeric": 6666.66,
            "percent": 6666.66,
            "currency": 6.666666,
            "column_editable": "Column Editable 6",
            "column_not_sortable": "Column Not Sortable 6",
            "column_action": "View",
            "view": true,
            "edit": false,
            "delete": false,
        
          }, {
            "id": 7,
            "text": "Text Sample 7",
            "number": 77777.77,
            "numeric": 77777.77,
            "percent": 77777.77,
            "currency": 77777.77,
            "column_editable": "Column Editable 7",
            "column_not_sortable": "Column Not Sortable 7",
            "column_action": "Edit",
            "view": false,
            "edit": true,
            "delete": false,
        
          }, {
            "id": 8,
            "text": "Text Sample 8",
            "number": 888888.88,
            "numeric": 888888.88,
            "percent": 888888.88,
            "currency": 888888.88,
            "column_editable": "Column Editable 8",
            "column_not_sortable": "Column Not Sortable 8",
            "column_action": "Delete",
            "view": false,
            "edit": false,
            "delete": true,
        
          }
        ];

        $scope.configJvnDataSource = {
            title: 'jvnComponents DataTable Sample',
            data: $scope.dadosJvnDataSource,
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
                    actFunction: function(ev,row) { console.log('Linha id:'+ row.id + ' visualizada !'); }
                },
                {
                    actModel: 'edit',
                    actName: 'Editar',
                    actIcon: 'edit',
                    actShow: true,
                    actFunction: function(ev,row) { console.log('Linha id:'+ row.id + ' editada !'); },
                },
                {
                    actModel: 'delete',
                    actName: 'Deletar',
                    actIcon: 'delete',
                    actShow: true,
                    actFunction: function(ev,row) { console.log('Linha id:'+ row.id + ' deletada !'); }
                }
            ]
        };

        //INICIO EXPORT DATATABLE TO FILE
        $scope.data = new Date();
        $scope.dataFormatada = $filter('date')($scope.data, 'dd/MM/yyyy_HH:mm:ss');

        $scope.exportFileName = $scope.configJvnDataSource.title.replace(/ /g,"_")+'_'+$scope.dataFormatada;


        $scope.export = function (exportFileExtension) {
            var blob = new Blob([document.getElementById('exportable').innerHTML], {
                type: exportFileExtension=="excel"?"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                    : exportFileExtension=="word"?"application/msword":"application/pdf;charset=utf-8"
            });

            if(blob.type != '') 
            {
                saveAs(blob, $scope.exportFileName+exportFileExtension);
            }
        };

        $scope.exportPDF = function () {
            html2canvas(document.getElementById('exportable'), {
                onrendered: function (canvas) {
                    var data = canvas.toDataURL();
                    var docDefinition = {
                        content: [{
                            image: data,
                            width: 550,
                        }]
                    };
                    pdfMake.createPdf(docDefinition).download($scope.exportFileName+".pdf");
                }
            });
        };

        //FIM EXPORT DATATABLE TO FILE
    });

})();