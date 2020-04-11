(function() {
    'use strict';

    app.config(appInterceptors);

    appInterceptors.$inject = ['$httpProvider'];

    function appInterceptors($httpProvider) {
	     //$httpProvider.interceptors.push("timeStampInterceptor");
	      $httpProvider.interceptors.push("errorInterceptor");
        $httpProvider.interceptors.push("loadingInterceptor");
        $httpProvider.interceptors.push("authHttpResponseInterceptor");
    }
})();
