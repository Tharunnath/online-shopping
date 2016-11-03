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
		
			})
		}



}]);