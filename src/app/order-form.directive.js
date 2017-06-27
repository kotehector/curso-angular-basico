function orderForm() {
  return {
    scope: {},
    bindToController: {
      data: '=', // two-data
      submit: '&'
    },
    restrict: 'E',
    controller: 'OrderFormController as form',
    template: `
      <pre>{{ form.data | json }}</pre>
      <form novalidate ng-submit="form.onSubmit();">
        <input type='text' placeholder='Nombre' ng-model="form.data.name">
        <input type='email' placeholder='Email' ng-model="form.data.email">
        <input type='text' placeholder='Ciudad' ng-model="form.data.location">
        <select>
          <option>Tu ciudad</option>
        </select>
        <textarea placeholder='Tu mensaje (opcional)' ng-model="form.data.location"></textarea>
        <button type="submit"> Pedir </button>
      </form>
    `
  }
}

angular
  .module('app')
  .directive('orderForm', orderForm);
