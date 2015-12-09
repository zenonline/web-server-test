var express = require('express');
var app = express();
var PORT = 3000;

var middle_ware = {
	require_authentication: function (req, res, next){
		console.log('private route hit');
			next();
	},
	logger: function (req, res, next){
		
		
		console.log('On '+  new Date().toString() +' via request method:'+req.method+', the page '+req.originalUrl+' was requested');
		next();
	}
}
app.use(middle_ware.logger);
//app.use(middle_ware.require_authentication);

app.get('/about', middle_ware.require_authentication, function (req, res) {
	res.send('the about page!');
});

app.use(express.static(__dirname+"/public"));

app.listen(PORT, function () {
	console.log('express server started, listening at port:'+PORT);
});