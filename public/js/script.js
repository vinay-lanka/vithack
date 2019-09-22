var app = angular.module('honeywell', []);

app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});
app.controller('control', function($scope,$http) {
    $scope.count = 0;
    $scope.coord = [];
    $scope.sendFunc = function(x,y) {
      $scope.count +=1;
      console.log($scope.count);
      console.log(x);
      console.log(y);
      console.log(event.target.id);
      $scope.coord.push({x,y});
      // console.log(document.getElementById(event.target.id).style.backgroundColor=="white");
      document.getElementById(event.target.id).style.backgroundColor="blue";
      if(document.getElementById(event.target.id).style.backgroundColor=="white")
      $scope.color = "blue";
    }
    $scope.submitFunc = function() {
      console.log($scope.coord);
      if($scope.coord.length==20){
        $http({
          url: "/submit",
          method: "POST",
          data: $scope.coord
        }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                console.log("LOL");
                $scope.data = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.error = response.statusText;
        });
      }else{
        alert("Please enter 20 co-ordinates!")
      }
    }
});