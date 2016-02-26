var db = require("../connect").db;
module.exports = function(req,res){
  db.select('*').from('plant').limit(8)
  .then(function(resp) {
        res.render("main", {
          factorys:resp
        });
  });


}
