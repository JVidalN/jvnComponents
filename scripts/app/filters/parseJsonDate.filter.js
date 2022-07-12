(function() {
    'use strict';

    app.filter("parseJsonDate", parseJsonDate);

    function parseJsonDate() {
        var filter = function (input) {
        
            var fullDate = new Date(parseInt(input.substr(6)));
            var twoDigitMonth = (fullDate.getMonth() + 1) + ""; if (twoDigitMonth.length == 1) twoDigitMonth = "0" + twoDigitMonth;

            var twoDigitDate = fullDate.getDate() + ""; if (twoDigitDate.length == 1) twoDigitDate = "0" + twoDigitDate;
            var currentDate = twoDigitDate + "/" + twoDigitMonth + "/" + fullDate.getFullYear();

            return currentDate;
        }

        return filter;
    }
})();