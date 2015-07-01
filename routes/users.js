var express = require('express');
var router = express.Router();
var service = require('../service/userService');

/* get方式跳转到用户登录页面 */
router.get('/login',function(req,res,next){
	res.render('login',{title:'用户登录'})
});

router.post('/doLogin',function(req,res,next){
	// console.log(req.body.username + req.body.password);
	service.checkUser(req.body.username,req.body.password);
	res.end();
});

module.exports = router;
