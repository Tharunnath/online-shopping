var app=angular.module("loginapp",[]);

app.controller("loginctrl",["$scope","$http","$location",function($scope,$http,$location){
	$scope.username=$location.search().username;
	if($scope.username !=null){
		$scope.user=true;
		$scope.welcome="Welcome to "
	}
	

		
}]);