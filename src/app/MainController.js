function MainController(a, b) {
  a.name = "Samelan";
  a.countries = ['Francia', 'Brasil'];
}

MainController.$inject = ['$scope', '$rootScope'];

angular
  .module('app')
  .controller('MainController', MainController);
