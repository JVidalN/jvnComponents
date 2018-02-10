*[Leia a documentação em Português](https://github.com/LegolasDBA/jvnComponents/blob/master/README-ptBR.md)*

---

# jvnComponents

Personal project of directives with AngularJS, using Angular Material, to facilitate the development of apps.
Personal project of directives with AngularJS using the Angular Material and Material Icons, to facilitate the development of apps.

Some of these components were created based on already existing components, however, controls and functionalities were included that I found pertinent to facilitate the use, besides using the Angular Material and Material Icons.

All references are described below.

> **Developer:** [Jean Vidal Nunes](https://github.com/LegolasDBA)

## References

1. jvnControleAcesso

2. jvnDataTable

3. jvnDualList

4. jvnInputFile

5. jvnLoader

6. jvnMenu

7. jvnModule

## Getting Started

To test the components I currently use Node.js, where it is used to store the data that will be consumed by the AngularJS service. If you do not want to use Node.js, simply put the data directly into the AngularJS controller.

Also, I used windows IIS and call localhost in the browser to start the app.

## Project Structure

The basic structure of the project was organized as follows:

```
.
|-- content/
|   |-- images
|   |-- material-design-icons				//For use material design icons offline.
|-- scripts/
|   |-- app
|   |   |-- config
|   |   |-- directives
|   |   |-- factory
|   |   |-- filters
|   |   |-- interceptors
|   |   |-- modules
|   |   |   |-- Exemple						//For all codes that involve this module.
|   |   |   |   |-- exemple.controller.js
|   |   |   |   |-- exemple.css
|   |   |   |   |-- exemple.html
|   |   |   |   |-- exemple.service.js
|   |   |-- services						//For general services.
|   |-- deps
|   |   |-- angular
|   |   |-- angular-material
|   |   |-- angular-material-icons
|   |   |-- angular-ui-router
|   |   |-- jquery
|   |   |-- jvnComponents
|   |   |-- moment
|   |   |-- others
```



## Prerequisites

Add the following references for the proper functioning of the directives:

* [JQuery](https://jquery.com/)
* [AngularJS](https://angularjs.org/)
* [Angular Material](https://material.angularjs.org)
* [Material Design Icons](https://material.io/icons/)

## Demo JvnComponentes

[App Demo](https://rawgit.com/LegolasDBA/jvnComponents/master/index.html)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/LegolasDBA/jvnComponents/blob/master/LICENSE.md) file for details.