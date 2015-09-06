var app = angular.module('myApp',['ngSanitize']);
app.controller('mainCtrl', ['$scope','$sce',function($scope, $sce){
  $scope.userRegExp = "([A-Z])\\w+";
  $scope.userFlag = "g";
  $scope.userText = '';
  $scope.regCheck = function(){
    var m;
    var myText = $scope.userText;
    var re = new RegExp($scope.userRegExp, $scope.userFlag);
    while((m = re.exec(myText)) !== null ){
      var results = myText.replace(re, function($1){
        return $sce.trustAsHtml('<span class="found">' + $1 + '</span>');
      });
      return results;
    }
  }
}]);
