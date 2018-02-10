(function() {
    'use strict';

    app.service("dataTableAPI", dataTableAPI);

    dataTableAPI.$inject = ['$http', 'config'];

    function dataTableAPI($http, config) {

        var vm = this;

        vm.getData = function() {
			return $http.get(config.baseUrl + "/dataTable").then(function (response) { 
				return JSON.parse(JSON.stringify(response));
			}).catch(function (response) {
				return "Aconteceu um problema: Não foi possível carregar os dados!";
			});
		};
    }

})();