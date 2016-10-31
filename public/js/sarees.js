var app=angular.module('sareesapp',['ngRoute']);

//configure our routes
app.config(function($routeProvider){
	$routeProvider
	//route for the home page
	
	.when('/sarees',{
		templateUrl:'sarees.html',
		controller:'sareescontroller'
	});
	
	
	});
app.controller('sareescontroller',function($scope,$http){
var menslist=$http.get("sarees.json");
menslist.success(function(data){
$scope.sareesdata=data;
});
});      






	
