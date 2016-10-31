var express = require("express");
var app = express();
var mongoose = require("mongoose");
//var Contact = require("./models/contact")
var bodyParser = require("body-parser");
/*
mongoose.connect("mongodb://localhost/contactlist",function(){
	console.log("successfully connected to the mongodb")
})*/
var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname+"/public"))
app.get("/",function(req,res){
	//res.send("helloajkajkl hyd");
	   //res.sendFile('category.html');
	//res.sendFile(path.join(__dirname + '/public/category.html'));
	 res.sendFile( __dirname + "/public/" + "category.html" );
})
app.listen(PORT,function(){
	console.log("server is listening at "+ PORT);
});
