var express = require("express"),
    router    = express.Router();
var User = require("../models/user-model");


router.get("/category/:job", function(req,res){
  User.find({ skill: req.params.job }, function(err, talentlist){
    if(err){
      console.log(err);
    }else{
      res.render("listView",{user:req.user ,talentlist:talentlist});
    }
  });
});



router.get("/showTalent/:id", function(req, res){
  User.findById(req.params.id).populate("comments").exec(function(err, talentdetalis){
    if(err){
      console.log(err);
    }else {
      res.render("talentProfile", {user:req.user ,talentdetalis:talentdetalis});
    }
  });
});

router.get("/footer/aboutus", function(req, res){
  res.render("aboutus", {user:req.user});
});

router.get("/footer/faqs", function(req, res){
  res.render("faqs", {user:req.user});
});

router.get("/footer/ourTeam", function(req, res){
  res.render("ourTeam", {user:req.user});
});

router.get("/footer/contactus", function(req, res){
  res.render("contactus", {user:req.user});
});

router.get("/footer/privacypolicy", function(req, res){
  res.render("privacypolicy", {user:req.user});
});

module.exports = router;
