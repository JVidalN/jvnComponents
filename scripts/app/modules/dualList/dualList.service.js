(function () {
  "use strict";

  app.service("dualListAPI", dualListAPI);

  dualListAPI.$inject = ["$http", "config"];

  function dualListAPI($http, config) {
    var vm = this;

    vm.getData = function () {
      return $http
        .get("dbRaiz.json")
        .then(function (response) {
          return JSON.parse(JSON.stringify(response.data.dualList));
        })
        .catch(function (response) {
          return "Aconteceu um problema: Não foi possível carregar os dados!";
        });
    };
  }
})();
