var db = require("../connect").db;
module.exports = function(req,res){
var id = req.params.id;
  db.select('*').from('plant').where('id',id).then(function(resp) {
        res.render("detail", {
          factorys:resp
        });
  });

}
