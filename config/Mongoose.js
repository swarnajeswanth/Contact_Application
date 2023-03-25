const Mongo = require('mongoose');
Mongo.connect('mongodb://127.0.0.1:27017/Contact_list_db');
var db= Mongo.connection;

db.on('error',console.error.bind(console,"Error while connecting to DB"));
db.once('open',function(){
    console.log("Database is connected Sucessfully");
});



