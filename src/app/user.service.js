function UserService($http) {
  var API = '//jsonplaceholder.typicode.com/users/';
  //* Servicios
  this.getUser = function(userId) {
    return $http
            .get(API + userId)
            .then(function(response) {
              return response.data;
            }, function(response) {
              console.log(response);
            })
  };

  /* Factorias
  function getUser(userId) {
    return $http
            .get(API + userId)
            .then(function(response) {
              return response.data;
            }, function(response) {
              console.log(response);
            })
  };
  function getAll() {
    // code
  }

  return {
    getUser: getUser
    getAll: getAll
  }
  */
}

angular
  .module('app')
  .service('UserService', UserService);
