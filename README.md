*[Leia a documentação em Português][readmePortuguese]*

---

# jvnComponents

Personal project of directives with AngularJS using the Angular Material and Material Icons, to facilitate the development of apps.

Some of these components were created based on already existing components, however, controls and functionalities were included that I found pertinent to facilitate the use, besides using the Angular Material and Material Icons.

All references are described in [Acknowledgment](#acknowledgment).

> **Developer:** [Jean Vidal Nunes][myGit]

## Getting Started

To test the components I currently use Node.js, where it is used to store the data that will be consumed by the AngularJS service. If you do not want to use Node.js, simply put the data directly into the AngularJS controller.

Also, I used windows IIS and call localhost in the browser to start the app.

## Project Structure

The basic structure of the project was organized as follows:

```
|-- content/
|   |-- images
|   |-- material-design-icons
|-- scripts/
|   |-- app
|   |   |-- config
|   |   |-- directives
|   |   |-- factory
|   |   |-- filters
|   |   |-- interceptors
|   |   |-- modules
|   |   |   |-- Exemple
|   |   |   |   |-- exemple.controller.js
|   |   |   |   |-- exemple.css
|   |   |   |   |-- exemple.html
|   |   |   |   |-- exemple.service.js
|   |   |-- services
|   |-- deps
```

### [content/][contentPath]
	
	Contains all general images and css contents that is used in the app.

### [content/images][imagesPath]

	Contains all images used in the app.

### [content/material-design-icons][materialDesignIconsPath]

	Contains everything needed to use the material design icons offline.

### [scripts/][scriptsPath]

	Contains all js code used in the app.

### [scripts/app][appPath]

	Contains all code for setting up and using the app.

### [scripts/app/config][configPath]

	Contains all configuration scripts for in-app routing and use.

### [scripts/app/directives][directivesPath]

	Contains all the general policies used in the app.

### [scripts/app/factory][factoryPath]

	Contains all factories used in the app.

### [scripts/app/filters][filtersPath]

	Contains all filters used in the app.

### [scripts/app/interceptors][interceptorsPath]

	Contains all interceptors used in the app.

### [scripts/app/modules][modulesPath]

	Contains app modules and all related codes, html, css, controller, service.

### [scripts/app/services][servicesPath]

	Contains the general services used in the app.

### [scripts/deps][depsPath]

	Contains the application dependency scripts.

## Prerequisites

Add the following references for the proper functioning of the directives:

* [JQuery](https://jquery.com/)
* [AngularJS](https://angularjs.org/)
* [Angular Material](https://material.angularjs.org)
* [Material Design Icons](https://material.io/icons/)

## Demo JvnComponentes

[App Demo][AppDemo]

## License

This project is licensed under the MIT License - see the [LICENSE.md][licenseMIT] file for details.

## Acknowledgment

1. **jvnControleAcesso**

	Directive based on/inspired by this [Access Control Directive][AccessControlDirective].

2. **jvnDataTable**

	Directive created based on/inspired by the following items:

	* [Responsive Data Table][ResponsiveDataTable]
	* [Export Data][ExportData]
	* [Export To PDF][ExportToPDF]

3. **jvnDualList**

	Directive based on/inspired by this [Dual List][DualList]

4. **jvnInputFile**

	Directive based on/inspired by this [Angular Material File Input][AngularMaterialFileInput]

5. **jvnLoader**

	Directive based on/inspired by the idea of ​​how to use my [friend][tcs]

6. **jvnMenu**

	Directive based on/inspired by this [Sidenav Menu][sidenavMenu].


[readmePortuguese]: https://github.com/LegolasDBA/jvnComponents/blob/master/README-ptBR.md
[myGit]: https://github.com/LegolasDBA
[contentPath]: https://github.com/LegolasDBA/jvnComponents/tree/master/content
[imagesPath]: https://github.com/LegolasDBA/jvnComponents/tree/master/content/images
[materialDesignIconsPath]: https://github.com/LegolasDBA/jvnComponents/tree/master/content/material-design-icons
[scriptsPath]: https://github.com/LegolasDBA/jvnComponents/tree/master/scripts
[appPath]: https://github.com/LegolasDBA/jvnComponents/tree/master/scripts/app
[configPath]: https://github.com/LegolasDBA/jvnComponents/tree/master/scripts/app
[directivesPath]: https://github.com/LegolasDBA/jvnComponents/tree/master/scripts/app
[factoryPath]: https://github.com/LegolasDBA/jvnComponents/tree/master/scripts/app
[filtersPath]: https://github.com/LegolasDBA/jvnComponents/tree/master/scripts/app
[interceptorsPath]: https://github.com/LegolasDBA/jvnComponents/tree/master/scripts/app
[modulesPath]: https://github.com/LegolasDBA/jvnComponents/tree/master/scripts/app
[servicesPath]: https://github.com/LegolasDBA/jvnComponents/tree/master/scripts/app
[depsPath]: https://github.com/LegolasDBA/jvnComponents/tree/master/scripts/deps
[AppDemo]: https://rawgit.com/LegolasDBA/jvnComponents/master/index.html
[licenseMIT]: https://github.com/LegolasDBA/jvnComponents/blob/master/LICENSE.md
[AccessControlDirective]: http://gabrielfeitosa.com/angularjs-diretiva-para-controle-de-acesso/
[ResponsiveDataTable]: https://github.com/paghdalyogesh/responsive-md-data-table
[ExportData]: http://jsfiddle.net/TheSharpieOne/XNVj3/1/
[ExportToPDF]: http://pdfmake.org/#/gettingstarted
[DualList]: https://github.com/tushariscoolster/ng-duallist
[AngularMaterialFileInput]: https://codepen.io/shepard_one/pen/MypdLy
[tcs]: https://github.com/tiagocarmosantos/
[sidenavMenu]: http://plnkr.co/edit/Ksfo7fnSB0c4DH6egE3S?p=preview