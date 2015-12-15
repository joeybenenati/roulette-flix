 'use strict';

/**
 * @ngdoc function
 * @name netRouletteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the netRouletteApp
 */
angular.module('netRouletteApp')
  .controller('MainCtrl', function ($scope, $location, Submit) {
    $scope.welcome = 'Roulette Flix';
    $scope.search = {
      actor: null,
      director: null,
      year: null
    };
    $scope.buttonText = 'Submit';
    $scope.result = {
      show_title: 'my movie'
    }
    // $scope.director = '';

    $scope.showResult = function () {
      console.log("result:", $scope.result.show_title);
    };

    $scope.spin = function () {
      // console.log('scope.search', $scope.search)
      Submit.spin($scope.search)
        .then(function(data) {
          console.log('data', data);
          $scope.result = data[Math.floor(Math.random() * data.length)];
          console.log('$scope.result2:', $scope.result.show_title);
          $location.path('/');
          setTimeout(function (){
            $location.path('/');
          }, 5000);
        });
    };


  });

// [Math.floor(Math.random()*res.data.length)]
