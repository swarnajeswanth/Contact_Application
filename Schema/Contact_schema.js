const Mongo= require('mongoose');

const Contact_Schema= new Mongo.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

const Contact =Mongo.model('contact',Contact_Schema);

module.exports = Contact;