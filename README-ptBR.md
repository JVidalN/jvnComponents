*[Read the documentation in English](https://github.com/LegolasDBA/jvnComponents/blob/master/README.md)*

---

# jvnComponents

Projeto pessoal de criação de diretivas com AngularJS utilizando o Angular Material e Material Icons, para facilitar o desenvolvimento de apps.

Alguns desses componentes foram criados baseados em componentes já existentes, porém, foram incluídos controles e funcionalidades que achei pertinente para facilitar o uso, além de utilizar o Angular Material e Material Icons. 

Todas as referências estão descritas abaixo.

> **Desenvolvedor:** [Jean Vidal Nunes](https://github.com/LegolasDBA)

## Referências

1. **jvnControleAcesso**

	Diretiva criada com base nessa [Diretiva para Controle de Acesso](http://gabrielfeitosa.com/angularjs-diretiva-para-controle-de-acesso/).

2. **jvnDataTable**

	Diretiva criada com base nos seguintes itens:

	* [Responsive Data Table](https://github.com/paghdalyogesh/responsive-md-data-table)
	* [Export Data](http://jsfiddle.net/TheSharpieOne/XNVj3/1/)
	* [Export To PDF](http://pdfmake.org/#/gettingstarted)

3. **jvnDualList**

	Diretiva criada com base nessa [Dual List](https://github.com/tushariscoolster/ng-duallist).

4. **jvnInputFile**

	Diretiva criada com base nesse [Angular Material File Input](https://codepen.io/shepard_one/pen/MypdLy).

5. **jvnLoader**

	Diretiva criada com base na ideia da forma de utilização de meu [amigo](https://github.com/tiagocarmosantos/)

6. **jvnMenu**

	Diretiva criada com base nesse [Sidenav Menu](http://plnkr.co/edit/Ksfo7fnSB0c4DH6egE3S?p=preview).

## Começando

Para testar os componentes atualmente utilizo o Node.js, onde o mesmo é utilizado para guardar os dados que serão consumidos pelo service do AngularJS. Caso não queira utilizar o Node.js, basta colocar os dados diretamente na controller do angular.

Além disso, para este projeto utilizei o IIS do windows, e chamo o localhost no browser para iniciar o app.

## Estrutura do Projeto

A estrutura básica do projeto foi organizada da seguinte forma:

```
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


## Pré-requisitos

Adicionar as seguintes referências para o bom funcionamento das diretivas:

* [JQuery](https://jquery.com/)
* [AngularJS](https://angularjs.org/)
* [Angular Material](https://material.angularjs.org)
* [Material Design Icons](https://material.io/icons/)

## Demo JvnComponentes

[App Demo](https://rawgit.com/LegolasDBA/jvnComponents/master/index.html)

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE.md](https://github.com/LegolasDBA/jvnComponents/blob/master/LICENSE.md) para obter detalhes.
