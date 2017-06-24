function OrderController() {
  var ctrl = this;

  ctrl.orderQuantity = 5;
  ctrl.name = 'Coca-cola';
}

angular
  .module('app')
  .controller('OrderController', OrderController);
