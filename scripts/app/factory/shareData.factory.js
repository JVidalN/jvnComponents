(function () {
    'use strict';

    app.factory("ShareData",ShareData);

    //The Factory used to define the value to
    //Communicate and pass data across controllers
    function ShareData() {
        var factory = { 
        	value: 0 
        }

        return factory;
    }
})();