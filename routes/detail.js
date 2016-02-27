var db = require("../connect").db;
module.exports = function(req,res){
/*var id = req.params.id;*/
var id = db.select('id').from('plant').limit(1);
  db.select('*').from('plant').where('id',id).then(function(resp) {
        res.render("detail", {
          factorys:resp
        });
  });

}
