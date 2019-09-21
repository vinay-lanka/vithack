var app = angular.module('honeywell', []);

app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});
app.controller('control', function($scope) {
    $scope.count = 0;
    // $scope.color = "white";
    $scope.sendFunc = function(n,m) {
      console.log(n);
      console.log(m);
      console.log(event.target.id);
      if ($scope.color == "white")
      $scope.color = "blue";
      $(event.target.id).css({"background-color":"blue"});
    }
});