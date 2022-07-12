(function() {
    'use strict';

    jvnApp.run(function ($templateCache) {
        $templateCache.put('jvnDataTable.html', '<md-content ng-cloak layout="column" class="md-padding" flex> <md-input-container ng-show="configJvnDataSource.options.searchBar" class="search"> <md-icon>search</md-icon> <label>Pesquisar</label> <input id="search-input" type="text" ng-model="filter.search" /> </md-input-container> <md-button ng-show="configJvnDataSource.options.advancedButton" class="animation-target md-primary md-raised" ng-model="btnAdvanced" ng-click="btnAdvanced=!btnAdvanced">Avançado</md-button> <md-content laout="column" flex> <md-card ng-if="btnAdvanced"> <div layout="row" layout-wrap class="checkboxes"> <md-checkbox ng-model="configJvnDataSource.options.searchBar">Barra de Pesquisa</md-checkbox> <md-checkbox ng-model="configJvnDataSource.options.rowSelection">Seleção de Linha</md-checkbox> <md-checkbox ng-model="configJvnDataSource.options.multiSelect">Seleção Múltipla</md-checkbox> <md-checkbox ng-model="configJvnDataSource.options.autoSelect">Seleção Automática</md-checkbox> <md-checkbox ng-model="configJvnDataSource.options.decapitate">Remover Cabeçalho</md-checkbox> <md-checkbox ng-model="configJvnDataSource.options.boundaryLinks">Paginação - Links de Limites</md-checkbox> <md-checkbox ng-model="configJvnDataSource.options.limitSelect">Paginação - Seleção de Limite</md-checkbox> <md-checkbox ng-model="configJvnDataSource.options.pageSelect">Paginação - Seleção de Página</md-checkbox> <div style="display:inline-block; margin:15px 15px 0 0;"> Exportação da Tabela: <md-checkbox ng-model="configJvnDataSource.options.exportation.word">Word</md-checkbox> <md-checkbox ng-model="configJvnDataSource.options.exportation.pdf">PDF</md-checkbox> <md-checkbox ng-model="configJvnDataSource.options.exportation.excel">Excel</md-checkbox> </div> </div> </md-card> <md-card> <md-toolbar class="md-table-toolbar md-default" ng-hide="configJvnDataSource.options.rowSelection && configJvnDataSource.selected.length"> <div class="md-toolbar-tools"> <span>{{configJvnDataSource.title}}</span> <div flex></div> <md-button class="md-icon-button" ng-click="configJvnDataSource.loadStuff()"> <md-tooltip>Recarregar</md-tooltip> <md-icon>refresh</md-icon> </md-button> <md-button ng-if="configJvnDataSource.options.exportation.word" class="md-icon-button" ng-click="export(\'word\')"> <md-tooltip>Word</md-tooltip> <i class="fa fa-file-word-o" style="font-size:18px"></i> </md-button> <md-button ng-if="configJvnDataSource.options.exportation.pdf" class="md-icon-button" ng-click="exportPDF()"> <md-tooltip>PDF</md-tooltip> <i class="fa fa-file-pdf-o" style="font-size:18px"></i> </md-button> <md-button ng-if="configJvnDataSource.options.exportation.excel" class="md-icon-button" ng-click="export(\'excel\')"> <md-tooltip>Excel</md-tooltip> <i class="fa fa-file-excel-o" style="font-size:18px"></i> </md-button> </div> </md-toolbar> <md-toolbar class="md-table-toolbar alternate" ng-show="configJvnDataSource.options.rowSelection && configJvnDataSource.selected.length"> <div class="md-toolbar-tools"> <span>{{configJvnDataSource.selected.length}} {{configJvnDataSource.selected.length > 1 ? \'items\' : \'item\'}} selecionado(s)</span> </div> </md-toolbar> <md-table-container id="exportable"> <table resize md-table md-row-select="configJvnDataSource.options.rowSelection" multiple="{{configJvnDataSource.options.multiSelect}}" ng-model="configJvnDataSource.selected" md-progress="promise"> <thead id="tablewidth" ng-if="!configJvnDataSource.options.decapitate" md-head md-order="configJvnDataSource.pager.query.order" md-on-reorder="configJvnDataSource.logOrder"> <tr  md-row> <th class="plusbuttonicon thaa0" data-title="Select" md-cell>#</th> <th ng-class="{\'Present\': true, [\'thaa\'+($index+1)]: true, \'md-numeric\': header.numeric }" md-column md-order-by="{{header.sortable ? header.field:\'\'}}" ng-repeat="header in configJvnDataSource.columnDefs"> <span>{{header.displayName}}</span> </th> <th ng-if="configJvnDataSource.options.showActions" md-column md-cell>Ações</th> </tr> </thead> <tbody md-body> <tr  class="primary trid{{itemJvn.id}}" md-row md-select="itemJvn" md-on-select="configJvnDataSource.rowSelectClick" md-auto-select="configJvnDataSource.options.autoSelect" ng-repeat-start="itemJvn in configJvnDataSource.data | filter: filter.search | orderBy: configJvnDataSource.pager.query.order | limitTo: configJvnDataSource.pager.query.limit : (configJvnDataSource.pager.query.page -1) * configJvnDataSource.pager.query.limit"> <td class="plusbuttonicon" md-cell> <md-button  id="{{itemJvn.id}}" ng-click="movedata();"  class="md-icon-button downarrow-{{itemJvn.id}} downarrow"> <i id="downarrow" class="material-icons">&#xE313;</i> </md-button> <md-button id="{{itemJvn.id}}"  ng-click="movedata();"  class="md-icon-button uparrow-{{itemJvn.id}} uparrow"> <i id="uparrow" class="material-icons">&#xE316;</i> </md-button> </td> <td contenteditable="{{dataBody.columnEditable}}" ng-class="\'thaa\'+($index+1)" data-title="{{dataBody.displayName}}" md-cell ng-repeat="dataBody in configJvnDataSource.columnDefs"> {{dataBody.numeric ? (itemJvn[dataBody.field] | number:2) : dataBody.percent ? (itemJvn[dataBody.field] + \'%\') : dataBody.currency ? (itemJvn[dataBody.field] | currency) : itemJvn[dataBody.field] }} </td> <td ng-if="configJvnDataSource.options.showActions" data-title="Ações" md-cell> <section layout="row" layout-sm="column" layout-align="center center" layout-wrap> <md-button ng-if="itemJvn[action.actModel]" ng-show="action.actShow" ng-click="action.actFunction($event, itemJvn)" class="md-icon-button md-primary" aria-label="{{action.actName}}" ng-repeat="action in configJvnDataSource.fActions"> <md-tooltip>{{action.actName}}</md-tooltip> <md-icon>{{action.actIcon}}</md-icon> </md-button> </section> </td> </tr> <tr class="secondary childid{{itemJvn.id}}" ng-repeat-end></tr> </tbody> </table> </md-table-container> <md-table-pagination layout="color: red;" md-limit="configJvnDataSource.pager.query.limit" md-limit-options="configJvnDataSource.options.limitSelect ? configJvnDataSource.pager.limitOptions: undefined" md-page="configJvnDataSource.pager.query.page" md-total="{{configJvnDataSource.data.length}}" md-page-select="configJvnDataSource.options.pageSelect" md-boundary-links="configJvnDataSource.options.boundaryLinks" md-on-paginate="configJvnDataSource.logPagination"></md-table-pagination> </md-card> </md-content> </md-content>');
    });

    jvnApp.directive('jvnDataTable', jvnDataTable);

    jvnDataTable.$inject = ['$mdEditDialog', '$q', '$filter', '$timeout', '$location'];

    function jvnDataTable($mdEditDialog, $q, $filter, $timeout, $location) {
        var directive =  {
            restrict: 'AE',
            scope: {
                jvnDataSource: '=jvnDataSource'
            },
            replace: true,
            templateUrl: 'jvnDataTable.html',
            link: linkFunc
        }

        return directive;

        function linkFunc(scope, element, attrs) {
            var linkCss2 = angular.element('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');
            $("head").append(linkCss2);
        
            scope.$watch('jvnDataSource', function() {
                scope.loadStuff = function () {
                    scope.promise = $timeout(function () {
                        console.log("DataTable Recarregada");
                        // loading
                    }, 2000);
                }
                
                if(scope.jvnDataSource !== undefined){

                    scope.configJvnDataSource = scope.jvnDataSource;


                    //INICIO EXPORT DATATABLE TO FILE
                    scope.data = new Date();
                    scope.dataFormatada = $filter('date')(scope.data, 'dd/MM/yyyy_HH:mm:ss');

                    scope.exportFileName = scope.configJvnDataSource.title.replace(/ /g,"_")+'_'+scope.dataFormatada;


                    scope.export = function (exportFileExtension) {
                        var blob = new Blob([document.getElementById('exportable').innerHTML], {
                            type: exportFileExtension=="excel"?"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                                : exportFileExtension=="word"?"application/msword":"application/pdf;charset=utf-8"
                        });

                        if(blob.type != '') 
                        {
                            saveAs(blob, scope.exportFileName);
                        }
                    };

                    scope.exportPDF = function () {
                        html2canvas(document.getElementById('exportable'), {
                            onrendered: function (canvas) {
                                var data = canvas.toDataURL();
                                var docDefinition = {
                                    content: [{
                                        image: data,
                                        width: 550,
                                    }]
                                };
                                //pdfMake.createPdf(docDefinition).open();
                                pdfMake.createPdf(docDefinition).download(scope.exportFileName+".pdf");
                            }
                        });
                    };

                    //FIM EXPORT DATATABLE TO FILE
                }
            },true);
        }
    }

})();
