(function() {
    'use strict';

    app.config(appHtml5Mode);

    appHtml5Mode.$inject = ['$locationProvider'];

	//Need to enable HTML5Mode if you want navigation without hash tags
	//And also need to tell angular the root URL of app by adding the following code to the <head> of HTML file: <base href="/">
	//Be aware that support for HTML5 mode depends on the browser. For those who don't support the History API, Angular will fallback to hashbang.
	function appHtml5Mode($locationProvider) {
  		$locationProvider.html5Mode({ 
  			enabled: true,
  			requireBase: true
  		});
	}
})();