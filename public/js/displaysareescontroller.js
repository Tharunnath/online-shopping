var app=angular.module('sareesApp',['ngRoute']);

//configure our routes
app.config(function($routeProvider){
	$routeProvider
	//route for the home page
	
	.when('/',{
		templateUrl:'home.html',
		controller:'homeCtrl'
	})
	.when('/home',{
		templateUrl:'home.html',
		controller:'homeCtrlswitch'
	})
	.when('/silk',{
		templateUrl:'displaysarees.html',
		controller:'silkcontroller'
	})

	.when('/cotton',{
		templateUrl:'displaysarees.html',
		controller:'cottoncontroller'
	})	
	
	.when('/crepe',{
		templateUrl:'displaysarees.html',
		controller:'crepecontroller'
	})

	.when('/banarasi',{
		templateUrl:'displaysarees.html',
		controller:'benarasicontroller'
	})

	.when('/detail/:name/:category',{
		templateUrl:'routeDetail.html',
		controller:'detailcontroller'

	})


	.when('/register',{
		templateUrl:'registernew.html',
		controller:'registercontroller'
	});	


	});
	
	
	
		app.controller('homeCtrl',function($scope,$http){
			
			
			
		var frentdata=$http.get("carousaljson.json");
	frentdata.success(function(data){
	$scope.images=data;
	document.getElementById("divid").className="flexslider";
	document.getElementById("ulid").className="slides";
	setTimeout(function(){
		  $('.flexslider').flexslider({
			animation: "slide",
			start: function(slider){
			  $('body').removeClass('loading');
			}
		  })
		  },20);
	});
	
	var homelist=$http.get("silk.json");
		homelist.success(function(data){
		$scope.sareeshomedata=data;
});	


		
	});
	
		app.controller('homeCtrlswitch',function($scope,$http){
			
				var homelist=$http.get("silk.json");
			homelist.success(function(data){
			$scope.sareeshomedata=data;
				 });
				
			
		var frentdata=$http.get("carousaljson.json");
		frentdata.success(function(data){
		$scope.images=data;
		document.getElementById("divid").className="flexslider";
		document.getElementById("ulid").className="slides";
		setTimeout(function(){
			  $('.flexslider').flexslider({
				animation: "slide",
				start: function(slider){
				  $('body').removeClass('loading');
				}
			  })
			  },20);
		});
		});
	
	

   
	
	
app.controller('silkcontroller',function($scope,$http){
var silklist=$http.get("silk.json");
silklist.success(function(data){
$scope.sareesdata=data;
});
});      


app.controller('cottoncontroller',function($scope,$http){
var cottonlist=$http.get("cotton.json");
cottonlist.success(function(data){
$scope.sareesdata=data;
});
}); 

app.controller('crepecontroller',function($scope,$http){
var crepelist=$http.get("crepe.json");
crepelist.success(function(data){
$scope.sareesdata=data;
});
}); 

app.controller('benarasicontroller',function($scope,$http){
var banarasilist=$http.get("banarasi.json");
banarasilist.success(function(data){
$scope.sareesdata=data;
});
}); 


app.controller('registercontroller',function($scope,$http){

}); 


app.controller('detailcontroller',function($scope,$routeParams,$http) {
     $scope.name = $routeParams.name;
           $scope.category = $routeParams.category.toLowerCase();
        var sareeList=$http.get($scope.category+".json");
       sareeList.success(function(data){
$scope.sareesdata=data;
});
});   
	
