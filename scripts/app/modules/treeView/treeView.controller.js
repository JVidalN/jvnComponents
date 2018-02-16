(function () {
    'use strict';

    app.controller("TreeViewCtrl", TreeViewCtrl);

    TreeViewCtrl.$inject = ['$scope', '$timeout', 'treeViewAPI'];

    function TreeViewCtrl($scope, $timeout, treeViewAPI) {

        console.log("Entrei no TreeViewCtrl!");

        var vm = this;

        vm.dataList = [
            {
                id: 1,
                descricao: 'jvnTree 1',
                idPai: 0
            },
            {
                id: 2,
                descricao: 'jvnTree 2',
                idPai: 0
            },
            {
                id: 3,
                descricao: 'jvnTree 3',
                idPai: 0
            },
            {
                id: 4,
                descricao: 'jvnTree 4 e Filho de jvnTree 3',
                idPai: 3
            },
            {
                id: 5,
                descricao: 'jvnTree 5 e Filho de jvnTree 4',
                idPai: 4
            },
            {
                id: 6,
                descricao: 'jvnTree 6 e Filho de jvnTree 4',
                idPai: 4
            },
            {
                id: 7,
                descricao: 'jvnTree 7 e Filho de jvnTree 3',
                idPai: 3
            },
            {
                id: 8,
                descricao: 'jvnTree 8 e Filho de jvnTree 3',
                idPai: 3
            },
            {
                id: 9,
                descricao: 'jvnTree 9',
                idPai: 0
            },
            {
                id: 10,
                descricao: 'jvnTree 10 e Filho de jvnTree 9',
                idPai: 9
            }
        ];
        vm.dataList1 = convertStructureOfObjectToTreeView('', vm.dataList);

        function convertStructureOfObjectToTreeView(idPai, objectInitial) {
            var objFinal = [];

            angular.forEach(objectInitial, function (item) {
                if (item.idPai == 0 && idPai == '') {
                    objFinal.push({
                        'id': item.id,
                        'descricao': item.descricao,
                        'parent': convertStructureOfObjectToTreeView(item.id, objectInitial)
                    })
                }
                else if (item.idPai == idPai) {
                    objFinal.push({
                        'id': item.id,
                        'descricao': item.descricao,
                        'parent': convertStructureOfObjectToTreeView(item.id, objectInitial)
                    })
                }
            })

            return objFinal;
        }

        function convertStructureOfTreeViewToObject(idPai, objectInitial, objFinal) {

            angular.forEach(objectInitial, function (item) {
                objFinal.push({
                    'id': item.id,
                    'descricao': item.descricao,
                    'idPai': (idPai == '' ? 0 : idPai)
                });

                if (item.parent.length > 0) {
                    objFinal = convertStructureOfTreeViewToObject(item.id, item.parent, objFinal);
                }
            });

            return objFinal;
        }
    }

})();