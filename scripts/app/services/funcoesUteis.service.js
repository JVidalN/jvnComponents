(function() {
    'use strict';

    app.service("funcoesUteisAPI", funcoesUteisAPI);

    funcoesUteisAPI.$inject = ['$http', '$mdToast', '$mdDialog', '$timeout'];

    function funcoesUteisAPI($http, $mdToast, $mdDialog, $timeout) {

        var vm = this;

        //VERIFICA SE A URL ESTÁ INDISPONIVEL
        vm.urlIndisponivel = function (prUrl) {
            $http({
                method: "GET",
                url: prUrl,
                timeout: 1000,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function mySuccess(response) {
                return false;
            }, function myError(response) {
                return true;
            });
        };

        //EXIBE MENSAGEM TIPO TEAST
        vm.mensagem = function (msg) {
            var toast = $mdToast.simple()
              .textContent(msg)
              .highlightAction(true)
              .highlightClass('md-accent')
              .position('bottom right');

            $mdToast.show(toast).then(function (response) {
            });
        }

        //EXECUTA A AÇÃO PASSADA POR PARAMETRO E EXIBE A MENSAGEM DE ACORDO COM A DESCRIÇÃO DA AÇÃO
        vm.confirmAction = function (actionDesc, act, target, row) {
            var actionParam = actionDesc;

            if (actionDesc == 'edit') {
                actionDesc = "EDIÇÃO"
            } else if (actionDesc == 'delete') {
                actionDesc = "EXCLUSÃO"
            } else if (actionDesc == 'active') {
                actionDesc = "ATIVAÇÃO"
            }

            var confirm = $mdDialog.confirm()
                  .title('Confirma a ' + actionDesc + '?')
                  .textContent('A ação será executada sobre o registro e a tabela será atualizada.')
                  .ariaLabel('Confirmação de ' + actionDesc)
                  .ok('Sim')
                  .cancel('Não');

            $mdDialog.show(confirm).then(function () {
                act(target, row, actionParam);
            }, function () {
                vm.mensagem(actionDesc + ' não executada!');
            });
        }

        //OBTÉM O ID E A DESCRICAO DAS OPTIONS DE UM SELECT HTML
        vm.getIdAndDescricaoByOptionsOfSelectHtml = function (id) {
            var dados = [];
            $(id + ' option').each(function () {
                dados.push({ 'id': $(this).val(), 'descricao': $(this).text() });
            });

            return dados;
        }

        //DEIXA PRIMEIRA LETRA UPPERCASE E O RESTANTE DO TEXTO LOWERCASE
        vm.onlyFirstUpper = function (word) {
            return word.toLowerCase().replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
        }

        //FORMATA DATA DO FORMATO DD/MM/YYYY HH:MM:SS PARA O FORMATO DO COMPONENTE DATEPICKER
        vm.formatDateForDatePicker = function (input) {
            if (input != '') {
                var date = input.split(' ')[0];
                var time = input.split(' ')[1];

                var day = date.split('/')[0];
                var month = date.split('/')[1];
                var year = date.split('/')[2];

                var dateFormated = year + '-' + month + '-' + day;

                var dataTimeFormated = dateFormated + "T" + time + ".000Z";

                return dataTimeFormated;
            }
            return "";
        }
    }

})();