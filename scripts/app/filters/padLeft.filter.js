(function() {
    'use strict';

    app.filter("padLeft", padLeft);

    function padLeft() {
        var filter = function (input, complemento, tamanho) {
            var pad = "";

            for (i = 0; i < tamanho ; i++) {
                pad += "" + complemento;
            }

            return (pad + input).slice(-pad.length);
        }

        return filter;
    }
})();