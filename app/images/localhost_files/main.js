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
      show_title: null,
      poster: null,
      director: null,
      rating: null,
      category: null,
      summary: null,
      release_year: null,
      show_cast: null
    }
    $scope.history = [];


    // $scope.director = '';

    $scope.showResult = function () {
      console.log("result:", $scope.result.show_title);
    };

    $scope.hasResult = function () {
      return ($scope.result.director)
    }

    $scope.spin = function () {
      // console.log('scope.search', $scope.search)
      Submit.spin($scope.search)
        .then(function(data) {
          $scope.result = data[Math.floor(Math.random() * data.length)];
          $scope.history.push($scope.result);
          console.log('shistory: ', $scope.history)
          // $location.path('/');
          // setTimeout(function (){
          //   $location.path('/');
          // }, 5000);
        });
    };


  });

// [Math.floor(Math.random()*res.data.length)]
