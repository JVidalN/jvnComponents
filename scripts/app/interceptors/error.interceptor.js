(function() {
    'use strict';

    app.factory("errorInterceptor",errorInterceptor);

    errorInterceptor.$inject = ['$q', '$state'];

    function errorInterceptor($q, $state) {
        var factory = {
            response: function (responseData) {
                return responseData || $q.when(responseData);
            },
            responseError: function error(rejection) {
                switch (rejection.status) {
                    case 401:
                        //401 Unauthorized - user is not logged into a password-protected area
                        $state.go('401State');
                        break;
                    case 403:
                        //403 Forbidden - browser does not have permission to perform the requested action
                        $state.go('403State');
                        break;
                    case 404:
                        //404 Not Found - browser cannot find the requested document on the server
                        $state.go('404State');
                        break;
                    case 500:
                        //500 Internal Server Error - server was unable to finish processing the request
                        $state.go('500State');
                        break;
                    case 502:
                        //502 Bad Gateway - server received an invalid response from an upstream server
                        $state.go('502State');
                        break;
                    case 503:
                        //503 Service Unavailable - server is currently unable to process the request
                        $state.go('503State');
                        break;
                    default:
                        $state.go('errorState');
                    }

                return $q.reject(rejection);
            }
        }

        return factory;
    }
})();