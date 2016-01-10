var express = require('express');
var router = express.Router();
var request = require('request');

var baseUrl = 'https://api.github.com';
//var url = 'https://api.github.com/users';

/* GET home page. */
router.get('/exec', function(req, res, next) {
    console.log("Verb : " + req.query.verb);
    var url = baseUrl + req.query.url;
    console.log("Git Request Url : " + url);

    request({ 
        url : url ,
        headers : { 
            'User-Agent' : 'n4nagappan'
        }
    }, function(err, _res, _body){
        res.send(_body);
    });
});

router.get('/:user/followers', function(req, res, next) {
    var url = baseUrl + '/' + req.params.user + '/followers';
    console.log("git url : " + url);
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
