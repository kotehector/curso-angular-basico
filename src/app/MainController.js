function MainController() {
  this.name = "Samelan";

  this.myObject = {
    'one': 'Hola',
    'two': 'Adiós'
  };

  this.myArray = ['Esto', 'es', 'un', 'array'];
}

angular
  .module('app')
  .controller('MainController', MainController);
