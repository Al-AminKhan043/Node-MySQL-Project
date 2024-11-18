var express =require('express');
var app=express();
app.set("view engine", "ejs");
var bodyparser=require("body-parser");
app.use(express.static(__dirname+"/style"));
const connection = require('./connection');
app.use(bodyparser.urlencoded({extended:true}));
app.get("/", function(req,res){

    // console.log("This is my first web!");
    // res.send("Hello, World!");
  // finding out users in database
   var q="select count(*) as counts from users";
   connection.query(q,function(err,results){
    if(err) throw err;
    var count=results[0].counts;
    //res.send("We have "+ count+" users in our db");
    res.render("home",{data: count});
   }


   );

});
app.post("/register", function(req,res)
{ 
//console.log("post req  sent to /resgister email is "+ req.body.email);


var s= {email:req.body.email
}

connection.query('insert into users set?',s,function(error,results){
if(error) throw error;
res.redirect("/");

}
);


}
);



app.get("/joke", function(req,res){
    var joke="This is the joke!";
    
    res.send(joke);
}
);
app.get("/random", function(req,res){
    var x= Math.floor(Math.random()*10+1);
    res.send("Your random number is: "+x);
    
    
}
);

app.listen(3002,function(){

    console.log('Server running!');
});