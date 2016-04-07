var app=angular.module('gifApp', []);
app.controller('MainController', function($scope, $http){

$scope.gif={};
$scope.theButtonClicked=false;

$scope.buttonClick=function(){

$http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC').then(function(response){
$scope.theButtonClicked=true;
  console.log(response);
  $scope.gif=response.data;

})
}
})
