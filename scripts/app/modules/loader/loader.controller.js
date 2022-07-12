(function () {
    'use strict';

    app.controller("LoaderCtrl", LoaderCtrl);

    LoaderCtrl.$inject = ['$scope', '$timeout', '$rootScope', 'loaderAPI'];

    function LoaderCtrl($scope, $timeout, $rootScope, loaderAPI) {

        console.log("Entrei no LoaderCtrl!");

        var vm = this;

        vm.options = {
        	message: 'Carregando, por favor aguarde...',
        	colors: ''
        }

        vm.changeColors = function(colors){
        	if(colors != undefined ){
        		var res = colors.split(';',4);
        		switch(res.length) {
				    case 1:
        				document.getElementById("jvnLoader").style.borderTop = "5px solid "+(res[0]==''?'#3498db':res[0]);
        				document.getElementById("jvnLoader").style.borderBottom = "5px solid #f3f3f3";
        				document.getElementById("jvnLoader").style.borderRight = "5px solid #f3f3f3";
        				document.getElementById("jvnLoader").style.borderLeft = "5px solid #f3f3f3";
				        break;
				    case 2:
        				document.getElementById("jvnLoader").style.borderTop = "5px solid "+(res[0]==''?'#3498db':res[0]);
        				document.getElementById("jvnLoader").style.borderBottom = "5px solid "+(res[1]==''?'#f3f3f3':res[1]);
        				document.getElementById("jvnLoader").style.borderRight = "5px solid #f3f3f3";
        				document.getElementById("jvnLoader").style.borderLeft = "5px solid #f3f3f3";
				        break;
				    case 3:
        				document.getElementById("jvnLoader").style.borderTop = "5px solid "+(res[0]==''?'#3498db':res[0]);
        				document.getElementById("jvnLoader").style.borderRight = "5px solid "+(res[1]==''?'#f3f3f3':res[1]);
        				document.getElementById("jvnLoader").style.borderBottom = "5px solid "+(res[3]==''?'#f3f3f3':res[3]);
        				document.getElementById("jvnLoader").style.borderLeft = "5px solid #f3f3f3";
				        break;
				    case 4:
        				document.getElementById("jvnLoader").style.borderTop = "5px solid "+(res[0]==''?'#3498db':res[0]);
        				document.getElementById("jvnLoader").style.borderRight = "5px solid "+(res[1]==''?'#f3f3f3':res[1]);
        				document.getElementById("jvnLoader").style.borderBottom = "5px solid "+(res[2]==''?'#f3f3f3':res[2]);
        				document.getElementById("jvnLoader").style.borderLeft = "5px solid "+(res[3]==''?'#f3f3f3':res[3]);
				        break;
				    default:
        				document.getElementById("jvnLoader").style.borderTop = "5px solid #3498db";
        				document.getElementById("jvnLoader").style.borderBottom = "5px solid #f3f3f3";
        				document.getElementById("jvnLoader").style.borderRight = "5px solid #f3f3f3";
        				document.getElementById("jvnLoader").style.borderLeft = "5px solid #f3f3f3";
        		}
        	}
        }
    }

})();