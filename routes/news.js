var db = require("../connect").db;
module.exports = function(req,res){
var news = req.body.records;
var type_number_classify = {
	园区厂房出租:1,
    吴中厂房出租:2,
    新区厂房出租:3,
    相城厂房出租:4,
    其他厂房出租:5,
    土地出租出售:6
}

var fac = news.area;

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth()+1;
var dates = today.getDate();
var times ;
if(month<10){
	if(dates<10){
		times = year.toString()+'-'+'0'+month.toString()+'-'+'0'+dates.toString();
	}
	else{
		times = year.toString()+'-'+'0'+month.toString()+'-'+dates.toString();
	}
}
else{
	if(dates<10){
		times = year.toString()+'-'+month.toString()+'-'+'0'+dates.toString();
	}
	else{
		times = year.toString()+'-'+month.toString()+'-'+dates.toString();
	}
}

db('register').insert({
	area:news.area,
	createtime:null,
	title:null,
	type:news.type,
	address:news.address,
	kind:null,
	description:news.description,
	price:null,
	acreage:news.acreage,
	telephone:news.telephone,
	person:news.person,
	time:times,
	type_number:type_number_classify[fac]}).then(function(){

		res.render("news");

	});

}