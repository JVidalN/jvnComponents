(function() {
    'use strict';

    app.directive('relogio', function ($interval) {
      return{
        restrict: 'AE',
        link: function(scope, element, attrs){
 
          var timer = $interval(function(){
            mudaTempo();
          },1000);
 
          function mudaTempo(){
             element.text((new Date()).toLocaleString());
          }
        }
      }
    });

})();