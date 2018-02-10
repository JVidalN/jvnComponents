(function() {
    'use strict';

    app.factory("loadingInterceptor",loadingInterceptor);

    loadingInterceptor.$inject = ['$q', '$rootScope', '$timeout'];

    function loadingInterceptor($q, $rootScope, $timeout) {
        var factory = {
            request: function (config) {
                $rootScope.loading = true;
                return config;
            },
            requestError: function (rejection) {
                $rootScope.loading = false;
                return $q.reject(rejection);
            },
            response: function (response) {
                $timeout(function () {
                    $rootScope.loading = false;
                }, 500);
                return response;
            },
            responseError: function (rejection) {
                $rootScope.loading = false;
                return $q.reject(rejection);
            }
        }

        return factory;
    }
})();