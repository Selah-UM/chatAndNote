var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.user){
    console.log("user = " + req.user.username);
    res.render('index', { user: req.user });
  }else{
    res.render('index');
  }
});

module.exports = router;
