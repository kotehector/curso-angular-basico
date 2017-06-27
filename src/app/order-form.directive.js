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
      <form name="orderForm" novalidate ng-submit="form.onSubmit();">
        <input name="name"
               type='text'
               placeholder='Nombre'
               ng-model="form.data.name"
               required=''>
        <div ng-show="orderForm.name.$error.required && orderForm.name.$touched">
          El nombre es obligatrio!
        </div>
        <input name="email"
               type='email'
               placeholder='Email'
               ng-model="form.data.email"
               required=''>
       <div ng-show="orderForm.email.$error.required && orderForm.email.$touched">
         El email es obligatrio!
       </div>
       <div ng-show="orderForm.email.$error.email && orderForm.email.$touched">
         El email no es correcto!
       </div>
        <input name='location'
               placeholder='Ciudad'
               ng-model="form.data.location"
               required=''>
         <div ng-show="orderForm.location.$error.required && orderForm.location.$touched">
           La ciudad es obligatria!
         </div>
        <select name="orderChoice"
                ng-model='form.data.product'
                ng-options='product.label for product in form.products'
                required=''>
          <option value="">Selecciona...  </option>
        </select>
        <textarea name="comments" placeholder='Tu mensaje (opcional)' ng-model="form.data.comments"></textarea>
        <button type="submit"
                ng-disabled="orderForm.$invalid"> Pedir </button>
      </form>
    `
  }
}

angular
  .module('app')
  .directive('orderForm', orderForm);
