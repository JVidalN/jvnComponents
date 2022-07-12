(function() {
    'use strict';

    jvnApp.run(function ($templateCache) {
        $templateCache.put('jvnInputFile.html', '<div layout="row"> <input id="fileInput" type="file" class="ng-hide"> <md-input-container flex class="md-block"> <input type="text" ng-model="fileName" value="Selecione o arquivo" disabled> <div class="hint">Selecione o arquivo</div> </md-input-container> <div> <md-button id="uploadButton" class="md-fab md-mini"> <md-icon>attach_file</md-icon> </md-button> </div> </div>');
    });

    jvnApp.directive('jvnInputFile', jvnInputFile);

    function jvnInputFile() {
        var directive = {
            replace: true,
            templateUrl: 'jvnInputFile.html',
            scope: {
                jvnFile: '='
            },
            link: linkFunc
        }

        return directive;

        function linkFunc(scope, elem, attrs) {
            var button = elem.find('button');
            var input = angular.element(elem[0].querySelector('input#fileInput'));

            button.bind('click', function() {
                input[0].click();
            });
            
            input.bind('change', function(e) {
                scope.$apply(function() {
                    var files = e.target.files;
                    console.log(e.target);
                    if (files[0]) {
                        scope.jvnFile = files[0];
                        scope.fileName = files[0].name;
                    } 
                    else {
                        scope.fileName = null;
                    }
                  });
            });
        }
    }
})();