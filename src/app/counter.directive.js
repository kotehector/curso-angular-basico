function counter() {
  return {
    scope: {},
    bindToController: {
      name: '@', // only string
      count: '=' // two-data
    },
    restrict: 'E',
    controller: 'CounterController as counter',
    template: `
      <div class='counter'>
        <label>{{ counter.name }}</label>
        <input type='text' ng-model="counter.count">
        <button type="button" ng-click="counter.decrement();"> - </button>
        <button type="button" ng-click="counter.increment();"> + </button>
      </div>
    `
  }
}

angular
  .module('app')
  .directive('counter', counter);
