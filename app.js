var routes = [
{ pattern: /^\/(index.html|favicon.ico|(web\/.*))$/, handle: require('staticResource.js') },
{ pattern: /^\/\w+\/\w+((\?.*)?)$/, handle: require('dataservice.js')}];
var httpserver = require('httpserver');
httpserver.run(routes);
