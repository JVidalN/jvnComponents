(function() {
    'use strict';

    app.filter("formatarData", formatarData);

    function formatarData() {
        var filter = function (input) {
            if (input != '') {
                var month = input.substr(5, 2);
                var day = input.substr(8);
                var year = input.substr(0, 4);
                return day + "/" + month + "/" + year;
            }
            return "";
        }

        return filter;
    }
})();