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

  }
}

angular
  .module('app')
  .controller('OrderController', OrderController);
