*[Read the documentation in English][readmeEnglish]*

---

# jvnComponents

Projeto pessoal de criação de diretivas com AngularJS utilizando o Angular Material e Material Icons, para facilitar o desenvolvimento de apps.

Alguns desses componentes foram criados baseados em componentes já existentes, porém, foram incluídos controles e funcionalidades que achei pertinente para facilitar o uso, além de utilizar o Angular Material e Material Icons. 

Todas as referências estão descritas em [Reconhecimentos].

> **Desenvolvedor:** [Jean Vidal Nunes][myGit]

## Começando

Para testar os componentes atualmente utilizo o Node.js, onde o mesmo é utilizado para guardar os dados que serão consumidos pelo service do AngularJS. Caso não queira utilizar o Node.js, basta colocar os dados diretamente na controller do angular.

Além disso, para este projeto utilizei o IIS do windows, e chamo o localhost no browser para iniciar o app.

## Estrutura do Projeto

A estrutura básica do projeto foi organizada da seguinte forma:

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

	Contém todo conteúdo de imagens e css gerais que são utilizados no app.

### [content/images][imagesPath]

	Contém todas as imagens utilizadas no app.

### [content/material-design-icons][materialDesignIconsPath]

	Contém todo o necessário para utilização do material design icons offline.

### [scripts/][scriptsPath]

	Contém todo o código js utilizado no app.

### [scripts/app][appPath]

	Contém todo o código para configuração e utilização do app.

### [scripts/app/config][configPath]

	Contém todos os scripts de configuração para utilização e roteamento no app.

### [scripts/app/directives][directivesPath]

	Contém todas as diretivas gerais utilizadas no app.

### [scripts/app/factory][factoryPath]

	Contém todos os factories utilizados no app.

### [scripts/app/filters][filtersPath]

	Contém todos os filters utilizados no app.

### [scripts/app/interceptors][interceptorsPath]

	Contém todos os interceptors utilizados no app.

### [scripts/app/modules][modulesPath]

	Contém os módulos do app e todos os códigos que o envolvem, html,css,controller,service.

### [scripts/app/services][servicesPath]

	Contém os services gerais utilizados no app.

### [scripts/deps][depsPath]

	Contém os scripts dependência do app.

## Pré-requisitos

Adicionar as seguintes referências para o bom funcionamento das diretivas:

* [JQuery](https://jquery.com/)
* [AngularJS](https://angularjs.org/)
* [Angular Material](https://material.angularjs.org)
* [Material Design Icons](https://material.io/icons/)

## Demo JvnComponentes

[App Demo][AppDemo]

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE.md][licenseMIT] para obter detalhes.

## Reconhecimento

1. **jvnControleAcesso**

	Diretiva criada com base/inspiração nessa [Diretiva para Controle de Acesso][AccessControlDirective].

2. **jvnDataTable**

	Diretiva criada com base/inspiração nos seguintes itens:

	* [Responsive Data Table][ResponsiveDataTable]
	* [Export Data][ExportData]
	* [Export To PDF][ExportToPDF]

3. **jvnDualList**

	Diretiva criada com base/inspiração nessa [Dual List][DualList].

4. **jvnInputFile**

	Diretiva criada com base/inspiração nesse [Angular Material File Input][AngularMaterialFileInput].

5. **jvnLoader**

	Diretiva criada com base/inspiração na ideia da forma de utilização de meu [amigo][tcs]

6. **jvnMenu**

	Diretiva criada com base/inspiração nesse [Sidenav Menu][sidenavMenu]:.


[readmeEnglish]: https://github.com/LegolasDBA/jvnComponents/blob/master/README.md
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