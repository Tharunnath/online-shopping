
(function(angular){
var app=angular.module('mensApp',[]);
app.controller("mensCtrl",function($scope,$http)
{
var menslist=$http.get("mens.json");
menslist.success(function(data){
$scope.mensdata=data;
});
});
})(window.angular);



  