var express = require("express"),
    router    = express.Router(),
    mongoose = require("mongoose");

var User = require("../models/user-model");
const bodyParser = require("body-parser");


var bodyParserencoded = bodyParser.urlencoded({extended:false});

router.get("/editprofile/:id" , function(req,res){
  res.render("edit",{user: req.user});
});

router.post("/editmyprofile/:id", bodyParserencoded ,function(req, res){
  var userid = req.params.id;
  var newvalues = { $set: { username: req.body.username,
                            category: "talent",
                            skill: req.body.skill,
                            age: req.body.age,
                          state: req.body.state,
                          PhoneNumber : req.body.PhoneNumber,
                          email : req.body.email,
                          DoB : req.body.DoB,
                          hourlyRate : req.body.hourlyRate,
                          youtubeUrl : req.body.youtubeUrl,
                          youtubeUrl2 : req.body.youtubeUrl2,
                        aboutTalents: req.body.aboutTalents} };
  User.findByIdAndUpdate(req.params.id, newvalues , function(err, updatedInformation){
    if(err)
    {
      throw err;
    }else {
      res.redirect("/showTalent/"+userid);
      //res.redirect("/myprofile/" + req.user.id);
    }
  });
})


function isLoggedIn(req,res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
