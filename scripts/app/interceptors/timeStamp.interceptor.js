(function() {
    'use strict';

    app.factory("timeStampInterceptor",timeStampInterceptor);

    // This interceptor it is used to by pass on browser's cache.
    function timeStampInterceptor() {
	    var factory = {
		    request : function(config){
			    var url = config.url;
			    if (url.indexOf('view') > -1) return config;
			    var timeStamp = new Date().getTime();
			    config.url = url + "?timestamp=" + timeStamp;
			    console.log(config.url);
			    return config;
		    }
	    }

	    return factory;
    }
})();