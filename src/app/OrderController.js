function OrderController() {
  var ctrl = this;

  ctrl.customerOrder = {
    name: '',
    email: '',
    location: '',
    product: {
      label: '',
      id: ''
    },
    comments: ''
  };

  ctrl.submitOrder = function() {
    //Comunicación con la API del Back-end
    console.log("Orden Pedida!");
  }
}

angular
  .module('app')
  .controller('OrderController', OrderController);
