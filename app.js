var routes = [
{ pattern: /^\/(default.htm|favicon.ico|(resources\/.*))$/, handle: require('./route/staticResource.js') },
{ pattern: /^\/\w+\/\w+((\?.*)?)$/, handle: require('./route/dataservice.js')}];
console.log('s');
var httpserver = require('httpserver');
httpserver.run(routes);
