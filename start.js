var express = require('express');
var bodyParser=require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',function(req, res){
	res.sendFile("index.html",{root:( __dirname+'/views')});
});

app.post('/contact.html',function (req,res){
	var user=req.body.user;
	var email=req.body.email;
	var sub=req.body.sub;
	var messa=req.body.messa;
	
	console.log("");
	console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+");
	console.log("Name:"+user);
	console.log("E-mail:"+email);
	console.log("Subject of message:"+sub);
	console.log("Text of message:"+messa);
 	res.end("yes");
	console.log("-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+");
});
app.use(express.static(__dirname + '/views'));

app.listen(PORT, function(){
	console.log('Listening at port '+PORT);
});


