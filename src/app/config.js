angular
  .module('app')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeController as ctrl',
      template: `
        <p>{{ ctrl.viewName }}</p>
      `
    })
    .state('about', {
      url: '/about',
      controller: 'AboutController as ctrl',
      template: `
        <p>{{ ctrl.viewName }}</p>
      `
    });
  $urlRouterProvider.otherwise('/');
}
