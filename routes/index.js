var express = require('express');
var router = express.Router();
var LoginH = require('../handlers/loginH.js');
var ErrorH = require('../handlers/errorH.js');
var dataH = require('../handlers/dataH');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WithU' });
});

/* Login Section */
router.get('/login', function(req,res, next) {
  res.render('login', {title: 'Login'});
});

router.post('/login', function(req,res, next) {
  LoginH.Login(req.body.username||"no",req.body.password||"",function(error,result){
    if (error) ErrorH.errorBindErrorPage(res, "login error", null);
    else if (result) res.json({result: "ok"});
    else {res.json({result: "no"});res.end();}
  });
});


/* Data Section */
router.get('/data', function(req,res,next) {
  var index = req.query.index||0;
  var size = req.query.size||0;

  dataH.getData(req.query.index,req.query.size,function(err,data) {
    res.json({data: data});res.end();
  });
});

router.get('/updatedata', function(req,res,next) {
  var obj = new dataH.Data(req.query.title, req.query.content, req.query.time, req.query.author);
  dataH.updateData(obj,function(err,result) {
    if(err) ErrorH.errorBindErrorPage(res, "update data error", null);
    else{ res.json({result: result});res.end(); }
  })
});
module.exports = router;
