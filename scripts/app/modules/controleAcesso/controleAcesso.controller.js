(function () {
    'use strict';

    app.controller("ControleAcessoCtrl", ControleAcessoCtrl);

    ControleAcessoCtrl.$inject = ['$scope', '$timeout', 'controleAcessoAPI'];

    function ControleAcessoCtrl($scope, $timeout, controleAcessoAPI) {

        console.log("Entrei no ControleAcessoCtrl!");

        var vm = this;

        vm.alerta = function(msg){
        	alert(msg);
        };

        vm.user = {
	      "id": 1,
	      "usuario": "jvn",
	      "permissoes": [
		        {
		          "permisssaoId": "btn1",
		          "permissaoAcesso": 1
		        },
		        {
		          "permisssaoId": "btn2",
		          "permissaoAcesso": 2
		        },
		        {
		          "permisssaoId": "link1",
		          "permissaoAcesso": 1
		        },
		        {
		          "permisssaoId": "link2",
		          "permissaoAcesso": 2
		        }
      		]
	  	};

        vm.SourceAccessControl = vm.user.permissoes;

        load();

        function load(){
            
            var promiseGet = controleAcessoAPI.getData();

            promiseGet.then(function (pl) {
                vm.SourceAccessControl = pl.data;
            }, function (errorPl) {
                $scope.error = 'falha ao tentar carregar os registros', errorPl;
            });
        }
    }
})();