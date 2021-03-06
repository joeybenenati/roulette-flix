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
      // show_title: "Cast Away",
      // poster: "http://netflixroulette.net/api/posters/60020683.jpg",
      // director: "Robert Zemeckis",
      // rating: "3.8",
      // category: "Dramas",
      // summary: "After FedEx systems engineer Chuck Noland's plane crashes in the Pacific Ocean, he finds himself fighting to survive on a deserted island.",
      // release_year: "1992",
      // show_cast: "Tom Hanks, Helen Hunt, Nick Searcy, Chris Noth, Lari White, Geoffrey Blake, Jenifer Lewis, Nan Martin, Wendy Worthington, Valerie Wildman, Steve Monroe, Elden Henson, Jay Acovone, Christopher Kriesa, Michael Forest, Ashley Edner"
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

    $scope.oops = false;

    $scope.hasError = function () {
      return $scope.oops;
    }

    $scope.spin = function () {
      // console.log('scope.search', $scope.search)
      $scope.oops = false;
      $scope.result.director = null;
      Submit.spin($scope.search)
        .then(function(data) {
          console.log('data', data);
          $scope.result = data[Math.floor(Math.random() * data.length)];
          $scope.history.push($scope.result);
          console.log('history:', $scope.history);
        })
        .catch(function (err) {
          $scope.oops = true;
          console.log(err)
          console.log($scope.oops);
        });
    };


  });

// [Math.floor(Math.random()*res.data.length)]
