*[Read the documentation in English](https://github.com/LegolasDBA/jvnComponents/blob/master/README.md)*

---

# jvnComponents

Projeto pessoal de criação de diretivas com AngularJS utilizando o Angular Material e Material Icons, para facilitar o desenvolvimento de apps.

Alguns desses componentes foram criados baseados em componentes já existentes, porém, foram incluídos controles e funcionalidades que achei pertinente para facilitar o uso, além de utilizar o Angular Material e Material Icons. 

Todas as referências estão descritas abaixo.

> **Desenvolvedor:** [Jean Vidal Nunes](https://github.com/LegolasDBA)

## Referências

1. jvnControleAcesso

2. jvnDataTable

3. jvnDualList

4. jvnInputFile

5. jvnLoader

6. jvnMenu

7. jvnModule

## Começando

Para testar os componentes atualmente utilizo o Node.js, onde o mesmo é utilizado para guardar os dados que serão consumidos pelo service do AngularJS. Caso não queira utilizar o Node.js, basta colocar os dados diretamente na controller do angular.

Além disso, para este projeto utilizei o IIS do windows, e chamo o localhost no browser para iniciar o app.

## Estrutura do Projeto

A estrutura básica do projeto foi organizada da seguinte forma:

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


## Pré-requisitos

Adicionar as seguintes referências para o bom funcionamento das diretivas:

* [JQuery](https://jquery.com/)
* [AngularJS](https://angularjs.org/)
* [Angular Material](https://material.angularjs.org)
* [Material Design Icons](https://material.io/icons/)

## Demo JvnComponentes

<a href="https://rawgit.com/LegolasDBA/jvnComponents/master/index.html" target="_blank">App Demo</a>

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE.md](https://github.com/LegolasDBA/jvnComponents/blob/master/LICENSE.md) para obter detalhes.
