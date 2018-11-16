var express = require("express"),
    router    = express.Router(),
    mongoose = require("mongoose");

var User = require("../models/user-model");
/*const bodyParser = require("body-parser");

var bodyParserencoded = bodyParser.urlencoded({extended:false});


router.post("/searchProfile",bodyParserencoded, function(req,res){
  User.find({ username: req.body.Search }, function(err, talentlist){
    if(err){
      console.log(err);
    }else{
      res.render("listView",{user:req.user ,talentlist:talentlist});
    }
  });
});*/


function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

router.get("/searchProfile", function(req, res) {
    if (req.query.search) {
       const regex = new RegExp(escapeRegex(req.query.search), 'gi');
       User.find({ category: regex }, function(err, talentlist) {
           if(err) {
               console.log(err);
           } else {
              res.render("listView",{user:req.user ,talentlist:talentlist});
           }
       });
    }
})


module.exports = router;
