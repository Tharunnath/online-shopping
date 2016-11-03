var express = require("express");
var app = express();
var mongoose = require("mongoose");
var contact = require("./model/contact")
var bodyParser = require("body-parser");
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/customerdetails",function(){  //db name
	console.log("successfully connected to the mongodb...")
})

var PORT = process.env.PORT || 2000;
app.use(express.static(__dirname+"/public"))
app.get("/",function(req,res){
	//res.send("helloajkajkl hyd");
	   //res.sendFile('category.html');
	//res.sendFile(path.join(__dirname + '/public/category.html'));
	 res.sendFile( __dirname + "/public/" + "category.html" );
})

//inserting customer details to DB
app.post("/contatcList", function(req,res){
	var body= req.body;// will fectch body details
	
	contact.AddContact(body,function(err,data){
		if(err){
			throw err;
		}
		res.json(data);
	})
});

app.listen(PORT,function(){
	console.log("server is listening at "+ PORT);
});
