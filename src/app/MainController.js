function MainController() {
  this.favorites = [{
      title: 'Matrix',
      year: '1999',
      popular: true,
      category: 'ciencia ficción'
    },{
      title: 'Cadena Perpetua',
      year: '1994',
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
  .controller('MainController', MainController);
