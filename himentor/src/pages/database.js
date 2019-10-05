var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'DivHacks'
});

con.connect(function(err){
	if (err) {
		console.log(err.message);
	};
	connection.end(function(err){
		if (err) return console.error(err.message);
	});
});
