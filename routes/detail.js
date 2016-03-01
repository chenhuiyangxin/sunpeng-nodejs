var db = require("../connect").db;
module.exports = function(req,res){
var plant1_data = null;
var plant2_data = null;
var plant3_data = null;
var plant4_data = null;
var plant5_data = null;
var plant6_data = null;

  db.select('*').from('plant1').limit(8)
  .then(function(resp) {
        plant1_data = resp;
  });

  db.select('*').from('plant2').limit(8)
  .then(function(resp) {
        plant2_data = resp;
  });

  db.select('*').from('plant3').limit(8)
  .then(function(resp) {
        plant3_data = resp;
  });

  db.select('*').from('plant4').limit(8)
  .then(function(resp) {
        plant4_data = resp;
  });

  db.select('*').from('plant5').limit(8)
  .then(function(resp) {
        plant5_data = resp;
  });

  db.select('*').from('plant6').limit(8)
  .then(function(resp) {
        plant6_data = resp;
  }).then(function(){
	var id = req.params.id;
	var type_number = req.params.type_number;
console.log(type_number);
	function plants (num){
		db.select('*').from('plant'+num).where('id',id).then(function(resp) {
        	res.render("detail", {
          	factorys:resp,
          	yq_factorys:plant1_data,
          wz_factorys:plant2_data,
          xq_factorys:plant3_data,
          xc_factorys:plant4_data,
          other_factorys:plant5_data,
          land_factorys:plant6_data
        	});
  		});
	}

	plants(type_number);
 
  });


}
