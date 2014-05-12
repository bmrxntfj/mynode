var path=require('path');
var app={
	host:'127.0.0.1',
	port:'1337',
	rootPath:path.normalize('.'),
	uploads:[{pattern:/^\/upload$/,path:'./web/upload/'}],
	routes: [
	{ pattern: /^\/(favicon.ico|(web\/.*))$/, handle: require('staticResource.js') },
	{ pattern: /^\/\w+\/\w+((\?.*)?)$/, handle: require('dataservice.js')}]
};

var httpserver = require('httpserver');
httpserver.run(app);
