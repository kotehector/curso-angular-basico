function MainController($http) {
  var ctrl = this;
  var API = '//jsonplaceholder.typicode.com/users/';
  this.userId = '';
  this.chosenUser = {};
  this.getUser = function() {
    if(!this.userId) {
      return;
    }
    $http
      .get(API + this.userId)
      .then(function(response) {
        ctrl.chosenUser = response.data;
      }, function(response) {
        console.log(response);
      })
  }
}

angular
  .module('app')
  .controller('MainController', MainController);
