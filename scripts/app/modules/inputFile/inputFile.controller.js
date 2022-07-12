(function () {
    'use strict';

    app.controller("InputFileCtrl", InputFileCtrl);

    InputFileCtrl.$inject = ['$scope', '$timeout', 'inputFileAPI'];

    function InputFileCtrl($scope, $timeout, inputFileAPI) {

        console.log("Entrei no InputFileCtrl!");

        var vm = this;    
    }

})();