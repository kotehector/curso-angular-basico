function AboutController() {
  var ctrl = this;
  ctrl.viewName = "About Page!";
}

angular
  .module('app')
  .controller('AboutController', AboutController);
