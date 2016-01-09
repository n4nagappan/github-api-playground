var express = require('express');
var router = express.Router();
var request = require('request');

//var url = 'https://api.github.com/users/n4nagappan/followers';
var url = 'https://api.github.com/users';

/* GET home page. */
router.get('/starrers', function(req, res, next) {
  request({ 
      url : url ,
      headers : { 
          'User-Agent' : 'n4nagappan'
      }
  }, function(err, _res, _body){
      res.send(_body);
  });
});

module.exports = router;
