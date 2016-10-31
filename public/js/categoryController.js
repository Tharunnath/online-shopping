
(function(angular){
var app=angular.module('categoryApp',[]);
app.controller("categoryCtrl",function($scope,$http)
{
var categorylist=$http.get("category.json");
categorylist.success(function(data){
$scope.categorydata=data;
});
});
})(window.angular);



  