(function () {
    'use strict';

    app.controller("DualListCtrl", DualListCtrl);

    DualListCtrl.$inject = ['$scope', '$timeout', 'dualListAPI'];

    function DualListCtrl($scope, $timeout, dualListAPI) {

        console.log("Entrei no DualListCtrl!");

        var vm = this;

        load();

        vm.dataNewsRight = [];
        vm.dataNewsLeft = [];
        vm.dataLeft = [];
        vm.dataRight = [];        
        vm.options = {
            orderByField: 'descricao',
            searchByField: 'descricao',
            displayedField: 'descricao',
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

        vm.dataLeft = [
            {
                id: 1,
                descricao: "ADMINISTRADOR"
            },            
            {
                id: 2,
                descricao: "ANALISTA JUNIOR"
            },            
            {
                id: 3,
                descricao: "ANALISTA SENIOR"
            }
            ,            
            {
                id: 4,
                descricao: "ANALISTA PLENO"
            },            
            {
                id: 5,
                descricao: "ASSISTENTE I"
            },            
            {
                id: 6,
                descricao: "ASSISTENTE II"
            },            
            {
                id: 7,
                descricao: "ASSISTENTE III"
            },            
            {
                id: 8,
                descricao: "ESTAGIÁRIO"
            },            
            {
                id: 9,
                descricao: "TESTER"
            },            
            {
                id: 10,
                descricao: "DESENVOLVEDOR FRONT END"
            },            
            {
                id: 11,
                descricao: "DESENVOLVEDOR BACK END"
            },            
            {
                id: 12,
                descricao: "DESENVOLVEDOR FULL STACK"
            }
        ];

        vm.dataRight = [
            {
                id: 13,
                descricao: "DBA JUNIOR"
            },            
            {
                id: 14,
                descricao: "DBA SENIOR"
            },            
            {
                id: 15,
                descricao: "DBA PLENO"
            }
        ];

        function load(){
            
            var promiseGet = dualListAPI.getData();

            promiseGet.then(function (pl) {
                var data = pl.data[0];
                
                vm.dataLeft = data.dataLeft;
                vm.dataRight = data.dataRight;
            }, function (errorPl) {
                $scope.error = 'falha ao tentar carregar os registros', errorPl;
            });
        }     
    }

})();