function stretch() {
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      //* jQLite
      $element.on('focus', function () {
        $element.css('width', '500px');
      });
      $element.on('blur', function () {
        $element.css('width', '50px');
      });

      //* Javascript
      // var element = $element[0];
      // element.addEventListener('blur', function() {
      //   this.style.width = 20;
      // });
    }
  }
}

angular
  .module('app')
  .directive('stretch', stretch);
