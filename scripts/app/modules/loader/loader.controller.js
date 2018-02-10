(function () {
    'use strict';

    app.controller("LoaderCtrl", LoaderCtrl);

    LoaderCtrl.$inject = ['$scope', '$timeout', 'loaderAPI'];

    function LoaderCtrl($scope, $timeout, loaderAPI) {

        console.log("Entrei no LoaderCtrl!");

        var vm = this;    
    }

})();