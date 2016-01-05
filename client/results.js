angular.module('drinkL.results', [])
  .controller('resultsCrtl', function($scope, Results){
    $scope.names = []
    var initializeResults = function (city) {
      Results.getResults(city)
        .then(function (results) {
          $scope.names = results;
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    initializeResults('Bakersfield');
  });