 'use strict';

/**
 * @ngdoc service
 * @name netRouletteApp.spinFactory
 * @description
 * # spinFactory
 * Service in the netRouletteApp.
 */
angular.module('netRouletteApp')
  .factory('Submit', function ($http) {
    function urlify (obj) {
      var result = '';
      for (var key in obj) {
        if (obj[key]) {
          result += key + '=' + obj[key].replace(' ', '+') + '&';
        }
      }
      return result;
    }

    var spin = function (obj) {
    // console.log("search: ", obj)
    // return urlify(obj);
      return $http({
        method: 'GET',
        url: 'https://community-netflix-roulette.p.mashape.com/api.php?' + urlify(obj),
        headers: {
          "X-Mashape-Key": "4APH3PhfSwmshuiAsIqbDaqq4esWp1IM8aRjsnopxZlRxm1muY"
        }
      })
      .then(function(res) {
        return res.data;
      });
    };

    return {
      spin: spin
    };
  });
