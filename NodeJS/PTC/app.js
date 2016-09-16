var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var expressSession = require('express-session');
var mongoStore = require('connect-mongo')(expressSession);
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var port= process.env.PORT || 3000;
var app = express();
var dbUrl = 'mongodb://localhost:27017/ptc';

//connect to mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl,function(err){
	if(err){
		console.log('database connection failure '+ err)
	}
	console.log('database connection established')
	}
)

app.use(bodyParser({extended:true}));
app.use(expressSession({
	secret: 'ptc',
	store: new mongoStore({
		url: dbUrl,
		collection: 'session'
	})
}));

app.listen(port);
app.use(serveStatic(path.join(__dirname)));
app.locals.moment = require('moment');

console.log('imooc started on port'+port);
