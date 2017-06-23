function CounterController() {
  var ctrl = this;

  ctrl.count = 0;
  ctrl.increment = function() {
    ctrl.count++;
  }
  ctrl.decrement = function() {
    ctrl.count--;
  }
}

angular
  .module('app')
  .controller('CounterController', CounterController);
