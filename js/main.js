var app = angular.module('myApp', []);

app.controller('PlayerController', ['$scope', function($scope) {
  $scope.playing = false;
  $scope.audio = document.createElement('audio');
  $scope.audio.src = '/media/gb.mp3';
}]);

app.controller('RelatedController', ['$scope', function($scope) {
}]);