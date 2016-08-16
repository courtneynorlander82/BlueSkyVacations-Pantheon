var app = angular.module("app", []);
app.controller("contact", function($scope) {
  $scope.contactFunc = function () {
      $scope.contactMsg = "Thank You.  We will get back to you Shortly!";
  }
});
