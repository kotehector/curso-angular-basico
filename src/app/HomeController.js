function HomeController() {
  var ctrl = this;

  ctrl.viewName = "Home Page!";
}

angular
  .module('app')
  .controller('HomeController', HomeController);
