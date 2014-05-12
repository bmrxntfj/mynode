var sql = require('mssql'); 

exports.query=function (start,limit,orders,filter,callback) {
	var config = {
	    user: 'sa',
	    password: '3h9TGyGG',
	    server: '172.18.217.101\\SQL2008', // You can use 'localhost\\instance' to connect to named instance
	    database: 'DriverTraining'
	};

	var connection = new sql.Connection(config, function(err) {
		console.log('connected...');
		
	    var request = new sql.Request(connection); // or: var request = connection.request();
	    request.query('select top 20 * from dbo.[User]', function(err, recordset) {
	        // ... error checks

	        console.log('executed...');
	        if(err){console.dir(err);}
	        console.dir(recordset);

	        callback({success:true,totalCount:2,result:recordset});
	    });

	});

	
}
exports.create=function(user){
	console.log('create goo....');
}
exports.update=function(user){
	console.log('update goo....');
}
exports.delete=function(user){
	console.log('delete goo....');
}