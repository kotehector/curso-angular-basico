function MoviesController() {
  this.newTitle = '';
  this.newDate = '';
  this.likesList = [];
  this.addMovie = function() {
    this.favorites.unshift({
      title: this.newTitle,
      year: this.newDate
    });
    thi
  }
  this.addToLikes = function(movie) {
      this.likesList.push(movie);
  }
  this.removeToLikes = function(index) {
    this.likesList.splice(index, 1);
  }
  this.favorites = [{
    title: 'Matrix',
    year: '1999',
    popular: true,
    category: 'ciencia ficción',
    imdb: 'tt0111161',
    img: 'M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },{
    title: 'Cadena Perpetua',
    year: '1994',
    popular: false,
    category: 'acción',
    imdb: 'tt0111161',
    img: 'M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },{
    title: 'Marte',
    year: '2015',
    popular: false,
    imdb: 'tt0111161',
    img: 'M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'
  },{
    title: 'El Padrino',
    year: '1972',
    popular: true,
    category: 'mafia',
    imdb: 'tt0111161',
    img: 'M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UX182_CR0,0,182,268_AL_.jpg'
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
