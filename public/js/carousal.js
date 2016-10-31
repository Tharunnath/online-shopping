
(function(angular){
	'use strict';
var app=angular.module('carousalApp',[]);
app.controller("carousalCtrl",function($scope,$http)
{
var imglist=$http.get("carousaljson.json");
imglist.success(function(data){
$scope.images=data;
document.getElementById("divid").className="flexslider";
document.getElementById("ulid").className="slides";
})
})
})(window.angular);

$(window).load(function(){
setTimeout(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      })
	  },10);
    });

  