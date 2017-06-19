function MoviesController() {
  this.favorites = [{
    title: 'Matrix',
    year: '1999',
    popular: true,
    category: 'ciencia ficción'
  },{
    title: 'Salvando al Soldando Ryan',
    year: '1998',
    popular: false,
    category: 'acción'
  },{
    title: 'Marte',
    year: '2015',
    popular: false
  },{
    title: 'El Padrino',
    year: '1972',
    popular: true,
    category: 'mafia'
  }];
}

angular
  .module('app')
  .controller('MoviesController', MoviesController);



//* Lógica explicada con Javascript
// var element = $('.some-element');
// if (condicion) {
//  element.addClass('x')
//  } else if (condicion) {
//  element.addClass('y')
//  } else if (condicion) {
//  element.addClass('z')
//  }
