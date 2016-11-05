var mongoose=require("mongoose");

var contactSchema = mongoose.Schema({
	name:
		{	
		type: String,
		},
	email:
		{
		type:String,	
		},
	pwd:
		{
		type:String,	
		},
	address:
		{
		type:String,	
		},
	phonenumber:
		{
		type:String,	
		}
});

var Contact = module.exports = mongoose.model("contact",contactSchema);//table name


module.exports.AddContact = function(contact, callback){
	Contact.create(contact,callback);
}

module.exports.getCustomerDetails=function(email,pwd,callback){
Contact.findOne({'email': email,'pwd':pwd}, callback);
}

module.exports.getprofile=function(id,callback){
Contact.findOne({'_id': id}, callback);
}