var dao = require("../dao/userDao");
var userService = {};
userService.findUserById = function (id){
	return "jim";
}

userService.checkUser = function (username,password){
	var user = dao.findUserByName(username);
	console.log(user);
}

module.exports = userService;