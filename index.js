
var express=require('express');
var port=5000;



const Mongo=require('./config/Mongoose');
const Contact= require('./Schema/Contact_schema');
var app=express();
// const parse=require('body-parse');
var path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'Views'));
app.use(express.urlencoded({extended: false}));
app.use(express.static('assets'));


app.get('/home',function(req,res){
    Contact.find({}).then((Contacts,err)=>{
        if(err){console.log("Error while fetching the data");}
        return res.render('home',{
            title:"My_Home_Page",
            contact_list:Contacts
          });
    });
  
});


app.get('/Delete-Contact/', function(req, res){
    let id = req.query.id;
    Contact.findByIdAndDelete(id).catch((err)=>{
        console.log("Error While Deleting a contact");
    })
    return res.redirect('back');
});

app.post('/create-contact',function(req,res){
    // contactList.push(req.body)
    
    Contact.create({
        name: req.body.name,
        phone:req.body.phone
    })  
    return res.redirect('back');
    
    // return res.redirect('/pratice');
});


app.listen(port,function(err){
    if(err){console.log(`The error is :${err}`)}
    console.log("Express is working");
})