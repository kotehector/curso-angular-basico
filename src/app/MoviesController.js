function MoviesController() {
  this.favorites = [{
    title: 'Matrix',
    year: '1999'
  },{
    title: 'Salvando al Soldando Ryan',
    year: '1998'
  },{
    title: 'El Padrino',
    year: '1972'
  }];
}

angular
  .module('app')
  .controller('MoviesController', MoviesController);
