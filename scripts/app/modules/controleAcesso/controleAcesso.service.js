(function() {
    'use strict';

    app.service("controleAcessoAPI", controleAcessoAPI);

    controleAcessoAPI.$inject = ['$http', 'config'];

    function controleAcessoAPI($http, config) {

        var vm = this;

        vm.getData = function() {
			return $http.get(config.baseUrl + "/controleAcesso").then(function (response) { 
				return JSON.parse(JSON.stringify(response));
			}).catch(function (response) {
				return "Aconteceu um problema: Não foi possível carregar os dados!";
			});
		};
    }

})();