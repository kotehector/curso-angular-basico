function MainController($scope) {
  $scope.name = "Samelan";
  $scope.countries = ['Francia', 'Brasil'];
}

angular
  .module('app')
  .controller('MainController', MainController);
