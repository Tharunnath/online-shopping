var app=angular.module("maincontroller",[]);

app.controller("myController",["$scope","$http",function($scope,$http){

		var refresh = function(){
		$http.get("/contatcList").success(function(response){
				$scope.contatcList= response;
				$scope.contact= "";
				refresh();
			});
		}


		$scope.AddContact= function(form){
			
			$http.post("/contatcList", $scope.contact).success(function(response){  //contact=""
				console.log(response);
				$scope.contact="";
		alert("Registration successfully completed");
		form.$setPristine();
		form.$setUntouched();
			})
		}

		$scope.customerlogin=function(){
	
	$http.get("/contatcList/"+$scope.login.email+"/"+$scope.login.pwd).success(function(response){

		console.log("in controller "+response);
		
		if(response!= null && response != " "){
			alert("Login successfully");
             window.location="category.html#?username="+response.name;
		}else{
			alert("invalid credentials");
		}
	});
}



}]);