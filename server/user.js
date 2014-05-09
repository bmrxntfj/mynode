exports.query=function (start,limit,orders,filter,callback) {
	console.log(start);
	console.log(limit);
	// console.log(orders);
	// console.log(filter);
	
	callback({success:true,totalCount:2,result:[{name:'bbq',age:24},{name:'kkq',age:22}]});
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