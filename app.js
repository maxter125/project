var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');
var app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));
var user={
	users:'mahesh',
	pass:'pass'
};
app.get('/',(req,res)=>{
	res.render('index',{
		title:'my project',
		desc:'my description',
		limit:3
	});
	

});
app.get('/add',function(req,res){

	res.render('index',{
		title:req.query.user,
		desc:req.query.password,
		limit:2
	
	});
	
	console.log(req);

});
	app.listen(3000);
