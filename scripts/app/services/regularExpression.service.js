(function() {
    'use strict';

    app.service("regExpService", regExpService);

    regExpService.$inject = ['$http'];

    function regExpService($http) {

        var vm = this;

        vm.getMatricula = function () {
            return '^[A-Za-z]{3}[0-9]{6,7}$';
        };

        vm.getTelefone = function () {
            return '^\([1-9]{2}\)([2-8]|9[1-9])[0-9]{2,3}\-[0-9]{4,5}$';
        };
    }

})();