/*
* More details here http://mongoosejs.com/docs/index.html
*/

//require mongoose node module
var mongoose = require('mongoose');

//connect to local mongodb database
var db = mongoose.connect('mongodb://127.0.0.1:27017/Test22');

//attach lister to connected event
mongoose.connection.once('connected', function() {
	console.log("Connected to database")
});
var express = require('express');
var app = express();
app.get('/p', function (req, res) {
 var Schema = mongoose.Schema;
 
 var bugSchema = new Schema({
     first_name: String,
     bugColour: String
	 });
 
 var Bug = mongoose.model("Bug", bugSchema); 
 

   // Prepare output in JSON format
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
    var Ajitesh = new Bug(response);
 
 Ajitesh.save(function(error) {
     console.log("Your bee has been saved!");
 if (error) {
     console.error(error);
 }
 });
})