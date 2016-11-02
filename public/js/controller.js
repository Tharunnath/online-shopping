var app=angular.module("maincontroller",[]);

app.controller("myController",["$scope","$http",function($scope,$http){

		var refresh = function(){
		$http.get("/contatcList").success(function(response){
				$scope.contatcList= response;
				$scope.contact= "";
				refresh();
			});
		}


		$scope.AddContact= function(){
			$http.post("/contatcList", $scope.contact).success(function(response){  //contact=""
				console.log(response);
				$scope.contact="";
		alert("Registration successfully completed");
			})
		}

		$scope.customerlogin=function(){
	
	$http.get("/contatcList/"+$scope.login.email+"/"+$scope.login.pwd).success(function(response){

		console.log("in controller "+response);
		alert(response);
		if(response!= null && response != " "){
			alert("Login successfully");
            window.location="category.html";
		}
	});
}



}]);