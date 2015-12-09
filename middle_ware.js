
module.exports = middle_ware;
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
module.exports = middle_ware;