(function () {
    'use strict';

    app.controller("HomeCtrl", HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$timeout', 'Page', 'homeAPI'];

    function HomeCtrl($scope, $timeout, Page, homeAPI) {
      
        console.log("Entrei no HomeCtrl!");

        Page.setTitle(Page.title());

        var vm = this;
    }
})();