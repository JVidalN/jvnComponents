(function() {
    'use strict';

    app.service("dualListAPI", dualListAPI);

    dualListAPI.$inject = ['$http', 'config'];

    function dualListAPI($http, config) {

        var vm = this;

        vm.getData = function() {
			return $http.get(config.baseUrl + "/dualList").then(function (response) { 
				return JSON.parse(JSON.stringify(response));
			}).catch(function (response) {
				return "Aconteceu um problema: Não foi possível carregar os dados!";
			});
		};
    }

})();