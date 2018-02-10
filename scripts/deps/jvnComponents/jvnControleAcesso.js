(function() {
    'use strict';

    jvnApp.directive('jvnControleAcesso', jvnControleAcesso);

    jvnControleAcesso.$inject = ['$compile'];

    function jvnControleAcesso($compile){
        var directive = {
            restrict: 'A',
            link: linkFunc,            
            scope: {
                jvnControleAcesso: "="
            }
        };

        return directive;

        function linkFunc(scope, element, attrs) {

            var permissoes = scope.jvnControleAcesso;

            if (permissoes !== undefined) {
                angular.element(document).ready(function (){

                    for (var i = 0; i < permissoes.length ; i++) {

                        var el = document.querySelector('[permisssaoId="' + permissoes[i].permisssaoId + '"]');

                        if (el != null) {
                            //1 - DISABLE
                            if (permissoes[i].permissaoAcesso == 1) {
                                el.setAttribute('disabled', 'disabled');
                                el.setAttribute('style', 'pointer-events: none;');
                            }
                            //2 - HIDE
                            else if (permissoes[i].permissaoAcesso == 2) {
                                el.setAttribute('class', 'ng-hide');
                            }
                        }
                    }
                });
            }
        }
    }
})();