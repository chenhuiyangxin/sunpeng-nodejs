var db = require("../connect").db;
module.exports = function(req,res){
var plant1_data = null;
var plant2_data = null;
var plant3_data = null;
var plant4_data = null;
var plant5_data = null;
var plant6_data = null;

  db.select('*').from('plant1').orderBy('order','desc').limit(8)
  .then(function(resp) {
        plant1_data = resp;
  });

  db.select('*').from('plant2').orderBy('order','desc').limit(8)
  .then(function(resp) {
        plant2_data = resp;
  });

  db.select('*').from('plant3').orderBy('order','desc').limit(8)
  .then(function(resp) {
        plant3_data = resp;
  });

  db.select('*').from('plant4').orderBy('order','desc').limit(8)
  .then(function(resp) {
        plant4_data = resp;
  });

  db.select('*').from('plant5').orderBy('order','desc').limit(8)
  .then(function(resp) {
        plant5_data = resp;
  });

  db.select('*').from('plant6').orderBy('order','desc').limit(8)
  .then(function(resp) {
        plant6_data = resp;
  });

  db.select('*').from('recommand').orderBy('order','desc').limit(10)
  .then(function(resp) {
        recommand_data = resp;
  }).then(function(){
    res.render("main", {
          yq_factorys:plant1_data,
          wz_factorys:plant2_data,
          xq_factorys:plant3_data,
          xc_factorys:plant4_data,
          other_factorys:plant5_data,
          land_factorys:plant6_data,
          rc_factorys:recommand_data


        });
  });




}
