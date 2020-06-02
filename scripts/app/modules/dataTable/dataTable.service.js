(function () {
  "use strict";

  app.service("dataTableAPI", dataTableAPI);

  dataTableAPI.$inject = ["$http", "config"];

  function dataTableAPI($http, config) {
    var vm = this;

    vm.getData = function () {
      return $http
        .get("dbRaiz.json")
        .then(function (response) {
          return JSON.parse(JSON.stringify(response.data.dataTable));
        })
        .catch(function (response) {
          return "Aconteceu um problema: Não foi possível carregar os dados!";
        });
    };
  }
})();
