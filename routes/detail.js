var db = require("../connect").db;
module.exports = function(req,res){
var id = req.params.id;
var type_number = req.params.type_number;
console.log(req.params.type_number);
if(type_number == 1){
	db.select('*').from('plant').where('id',id).then(function(resp) {
        res.render("detail", {
          factorys:resp
        });
  });
};
if(type_number == 2){
	db.select('*').from('plant2').where('id',id).then(function(resp) {
        res.render("detail", {
          factorys:resp
        });
  });
};
  

}
