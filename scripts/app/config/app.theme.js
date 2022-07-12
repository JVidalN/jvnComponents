(function () {
    'use strict';

    app.config(appTheme);

    appTheme.$inject = ['$mdThemingProvider'];

    function appTheme($mdThemingProvider) {

        console.log("Theming...");

        //INÍCIO DEFININDO TEMAS

        $mdThemingProvider.theme('jvn2018')
          .primaryPalette('green-2018', {
              'default': 'A200',
              'hue-1': '800',
              'hue-2': 'A400',
              'hue-3': 'A700'
          })
          .accentPalette('blue-2018', {
              'default': 'A200',
              'hue-1': '800',
              'hue-2': 'A400',
              'hue-3': 'A700'
          })
          .warnPalette('orange-2018', {
              'default': '900',
              'hue-1': '600',
              'hue-2': 'A200',
              'hue-3': 'A700'
          })
          .backgroundPalette('grey');

        // $mdThemingProvider.enableBrowserColor({
        //     theme: 'default', // Default is 'default'
        //     palette: 'primary', // Default is 'primary', any basic material palette and extended palettes are available
        //     hue: '800' // Default is '800'
        // });

        //FIM DEFININDO TEMAS

        //INÍCIO CONFIGURANDO OS PALETES DE CORES

        var green2018 = {
            '50': 'def3bf',
            '100': 'd3efa9',
            '200': 'c8eb94',
            '300': 'bde77e',
            '400': 'b2e269',
            '500': 'a7de54',
            '600': '9cda3e',
            '700': '91d629',
            '800': '82c125',
            '900': '74ab21',
            'A100': '65961d',
            'A200': '5c871a',
            'A400': '578118',
            'A700': '486b14',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],      
            'contrastLightColors': undefined
        }

        var blue2018 = {
            '50': 'cce6ff',
            '100': 'b3daff',
            '200': '99ceff',
            '300': '80c1ff',
            '400': '66b5ff',
            '500': '4da9ff',
            '600': '339cff',
            '700': '1a90ff',
            '800': '0084ff',
            '900': '0077e6',
            'A100': '0069cc',
            'A200': '0063be',
            'A400': '005cb3',
            'A700': '004f99',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
            'contrastLightColors': undefined
        }

        var orange2018 = {
            '50': 'ffeee6',
            '100': 'ffdecc',
            '200': 'ffcdb3',
            '300': 'ffbd99',
            '400': 'ffac80',
            '500': 'ff9c66',
            '600': 'ff8b4d',
            '700': 'ff7a33',
            '800': 'ff6a1a',
            '900': 'ff5a00',
            'A100': 'e65000',
            'A200': 'cc4700',
            'A400': 'b33e00',
            'A700': '993600',
            'contrastDefaultColor': 'light',
            'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
            'contrastLightColors': undefined
        }

        $mdThemingProvider.definePalette('green-2018', green2018);
        $mdThemingProvider.definePalette('blue-2018', blue2018);
        $mdThemingProvider.definePalette('orange-2018', orange2018);

        //FIM CONFIGURANDO OS PALETES DE CORES

        // This is the absolutely vital part, without this, changes will not cascade down through the DOM.
        $mdThemingProvider.alwaysWatchTheme(true);
    }
})();