function OrderFormController() {
  var ctrl = this;

  ctrl.products = [{
    label: 'Producto 1',
    id: '1'
  },{
    label: 'Producto 2',
    id: '2'
  },{
    label: 'Producto 3',
    id: '3'
  }];

  ctrl.onSubmit = function() {
    // Antes de enviar podemos procesar el Objeto.
    console.log(ctrl.data);
    this.submit();
  }
}

angular
  .module('app')
  .controller('OrderFormController', OrderFormController);
