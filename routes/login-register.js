const express   = require("express"),
      router    = express.Router(),
      passport  = require("passport"),
      User      = require('../models/user');

router.post('/api/register', function(req, res) {
  let newUser = new User({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      phoneNo: req.body.phoneNo
    });
    User.register(newUser, req.body.password, function(err,user){
      if(err){
        console.log(err);
        return res.status(500).send({error: err});
      }else{
        passport.authenticate('local')(req, res, function () {
          return res.status(200).send({id: user._id,username: req.body.username,name: req.body.name, email: req.body.email, phoneNo: req.body.phoneNo});
        });
      }
    });
});

router.post('/api/login', passport.authenticate("local"),function(req,res){
  res.status(200).send(req.user);
});

router.get("/api/logout",function(req,res){
  req.logout();
  res.status(200).send({});
});

router.get("/api/session", function(req,res){
  if(req.isAuthenticated()){
    return res.status(200).send(req.user);
  }else {
    return res.status(200).send();
  }
});

module.exports = router;