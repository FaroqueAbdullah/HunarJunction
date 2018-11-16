var express = require("express");
var router = express.Router();
var User = require("../models/user-model"),
    Comments    = require("../models/comments");



    router.post("/talent/:id/comments",isLoggedIn, function(req, res){
      User.findById(req.params.id, function(err, talent){
        if(err){
          console.log(err);
        }else {
          Comments.create(req.body.comment, function(err, comment){
            if(err){
              console.log(err);
            }else {
              comment.author.id = req.user._id;
              comment.author.username = req.user.username;
              comment.author.thumbnail = req.user.thumbnail;
              comment.save();
              talent.comments.push(comment);
              talent.save();
              res.redirect('/showTalent/'+ talent._id);
            }
          });
        }
      })
    })






function isLoggedIn(req,res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/auth/login");
}

module.exports = router;
