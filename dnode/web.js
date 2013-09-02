var http = require('http')
	, qs = require('querystring');


http.createServer(function(req,res){
	if(req.url.match(/^\/login/)){
		var param = qs.parse(req.url.split('?')[1]);
		authenticate(param.user
			,param.pass, function(err, result){
				res.end(err ? err : result);
			});
	}
}).listen(process.argv[2]);

function authenticate(user,pass,cb){
		var users = {
			foo : 'bar'
		};
		var p = users[user];
		if(p == pass) cb (null, 'AUTHORIZED!');
		else cb('REMOTE ACCESS DENIED');
};
