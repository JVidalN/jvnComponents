(function () {
  "use strict";

  app.service("controleAcessoAPI", controleAcessoAPI);

  controleAcessoAPI.$inject = ["$http", "config"];

  function controleAcessoAPI($http, config) {
    var vm = this;

    vm.getData = function () {
      return $http
        .get("dbRaiz.json")
        .then(function (response) {
          return JSON.parse(JSON.stringify(response.data.controleAcesso));
        })
        .catch(function (response) {
          return "Aconteceu um problema: Não foi possível carregar os dados!";
        });
    };
  }
})();
