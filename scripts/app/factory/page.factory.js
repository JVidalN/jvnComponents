(function () {
    'use strict';

    app.factory("Page", Page);

    function Page() {
        var vm = this;

        vm.title = '';

        vm.factory = {
            title: function () {
                return vm.title;
            },
            setTitle: function (newTitle) {
                vm.title = newTitle;
            }
        };

        return vm.factory;
    }
})();