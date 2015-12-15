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
