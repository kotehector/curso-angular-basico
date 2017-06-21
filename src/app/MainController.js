function MainController() {
  this.person = {
    name: '',
    city: ''
  }
}

angular
  .module('app')
  .controller('MainController', MainController);
