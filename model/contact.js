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
		}
});

var Contact = module.exports = mongoose.model("contact",contactSchema);//table name


module.exports.AddContact = function(contact, callback){
	Contact.create(contact,callback);
}