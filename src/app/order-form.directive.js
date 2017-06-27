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
      <pre>{{ orderForm | json }}</pre>
      <pre>{{ form.data | json }}</pre>
      <form name="orderForm" novalidate ng-submit="form.onSubmit();">
        <input name="name"
               type='text'
               placeholder='Nombre'
               ng-model="form.data.name"
               required=''>
        <input name="email"
               type='email'
               placeholder='Email'
               ng-model="form.data.email"
               required=''>
        <input name='location'
               placeholder='Ciudad'
               ng-model="form.data.location"
               required=''>
        <select>
          <option>Tu ciudad</option>
        </select>
        <textarea name="comments" placeholder='Tu mensaje (opcional)' ng-model="form.data.comments"></textarea>
        <button type="submit"> Pedir </button>
      </form>
    `
  }
}

angular
  .module('app')
  .directive('orderForm', orderForm);
