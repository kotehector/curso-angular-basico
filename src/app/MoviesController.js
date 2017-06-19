function MoviesController() {
  this.favorites = [{
    title: 'Matrix',
    year: '1999',
    popular: true
  },{
    title: 'Salvando al Soldando Ryan',
    year: '1998',
    popular: false
  },{
    title: 'Marte',
    year: '2015',
    popular: false
  },{
    title: 'El Padrino',
    year: '1972',
    popular: true
  }];
}

angular
  .module('app')
  .controller('MoviesController', MoviesController);



//* Lógica explicada con Toggle jQuery
// var element = $('.shome-element');
// if (condition) {
//   element.show();
// } else {
//   element.hide();
// }
