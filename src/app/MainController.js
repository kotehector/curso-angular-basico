function MainController(UserService) {
  var ctrl = this;

  this.userId = '';
  this.chosenUser = {};
  this.getUser = function() {
    if(!this.userId) {
      return;
    }
    UserService
      .getUser(this.userId)
      .then(function(response) {
        ctrl.chosenUser = response;
      }, function(response) {
        console.log(response);
      })
  }
}

angular
  .module('app')
  .controller('MainController', MainController);
