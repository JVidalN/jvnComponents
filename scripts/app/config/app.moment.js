(function() {
    'use strict';

    app.config(appMoment);

    appMoment.$inject = ['$mdDateLocaleProvider'];

    function appMoment($mdDateLocaleProvider) {
        $mdDateLocaleProvider.formatDate = function(date) {
           return moment(date).format('DD-MM-YYYY');
        }
    }
})();