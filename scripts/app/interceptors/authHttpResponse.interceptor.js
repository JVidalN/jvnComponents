(function() {
    'use strict';

    app.factory("authHttpResponseInterceptor",authHttpResponseInterceptor);

    authHttpResponseInterceptor.$inject = ['$q', '$state'];

    function authHttpResponseInterceptor($q, $state) {
        var factory = {
            response: function (response) {
                return response || $q.when(response);
            },
            responseError: function (rejection) {
                $state.go('homeState');
                return $q.reject(rejection);
            }
        }

        return factory;
    }
})();