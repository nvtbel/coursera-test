(function () { // prevent local var bleeding to the global scope
  'use strict'; // to prevent us from making any mistake
  /*so if we write x = "hello", without var keyword & use strict, it'll define itself as global var
  if we do place use strict, it'll pop out an error*/

  angular.module('myFirstApp', []) // instance of our angular app

  .controller('MyFirstController', function ($scope) { //everything in the div is controlled here (act as a ViewModel)
    $scope.name = "Novita";
    $scope.sayHello = function () {
      return "Hello Coursera!";
    }
  })
})();
