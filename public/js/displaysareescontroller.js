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

	.when('/detail/:id/:category',{
		templateUrl:'routeDetail.html',
		controller:'detailcontroller'

	})


	.when('/register',{
		templateUrl:'registernew.html',
		controller:'registercontroller'
	})

	.when('/displaysearch/:id',{
		templateUrl:'searchproducts.html',
		controller:'searchproductscontroller',
		
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
	
	var homelist=$http.get("totalproducts.json");
		homelist.success(function(data){
		$scope.sareeshomedata=data;
		//for loadmore concept
		var pagesShown = 1;

var pageSize = 3;

$scope.paginationLimit = function(data) {
 return pageSize * pagesShown;
};

$scope.hasMoreItemsToShow = function() {
 return pagesShown < ($scope.sareeshomedata.length / pageSize);
};

$scope.showMoreItems = function() {
 pagesShown = pagesShown + 1;       
};
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
$scope.sareeCategory="Silk";
silklist.success(function(data){
$scope.sareesdata=data;
});
});      


app.controller('cottoncontroller',function($scope,$http){
var cottonlist=$http.get("cotton.json");
$scope.sareeCategory="Cotton";

cottonlist.success(function(data){
$scope.sareesdata=data;
});
}); 

app.controller('crepecontroller',function($scope,$http){
var crepelist=$http.get("crepe.json");
$scope.sareeCategory="Crepe";

crepelist.success(function(data){
$scope.sareesdata=data;
});
}); 

app.controller('benarasicontroller',function($scope,$http){
var banarasilist=$http.get("banarasi.json");
$scope.sareeCategory="Banarasi";

banarasilist.success(function(data){
$scope.sareesdata=data;
});
}); 


app.controller('registercontroller',function($scope,$http){

}); 


app.controller('detailcontroller',function($scope,$routeParams,$http) {
     $scope.id = $routeParams.id;
           $scope.category = $routeParams.category.toLowerCase();
        var sareeList=$http.get($scope.category+".json");
       sareeList.success(function(data){
$scope.sareesdata=data;
});
});   
	
app.controller('searchproductscontroller',function($scope,$routeParams,$http){
$scope.id = $routeParams.id;
var searchlistlist=$http.get("totalproducts.json");

searchlistlist.success(function(data){
$scope.searchdatalist=data;

$scope.searchdata = [];
var searchdataone=$scope.searchproduct;
var searchDataValue = searchdataone.toLowerCase();
angular.forEach($scope.searchdatalist, function (value, key) {
var colour =value.colour;
var colourValue = colour.toLowerCase();
var category =value.category;
var categoryValue = category.toLowerCase();
var costValue =value.cost-(value.cost*value.offer)/100;
costValue=costValue.toFixed(0);

	if(categoryValue==searchDataValue || colourValue==searchDataValue || costValue==searchDataValue){
            $scope.searchdata.push(value);
        }
        }); 
});
}); 