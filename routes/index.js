// Author: Jean-Philippe Beaudet @ S3R3NITY Technology 
//
// AppTemplate
// Version : 0.0.1
// License: GNU 3.0 General Public License
//

var mongoose = require('mongoose');


exports.index = function (req, res) {
	var username = "Not logged in";
	var isAlreadyLoggedin = false;
	// if the user is logged in 
    if(req.user) {
    	username = req.user.username;
    	isAlreadyLoggedin = true;
    }
    var data = {
        title: " AppTemplate",
        username: username,
        isAlreadyLoggedin:isAlreadyLoggedin
    };
    res.render('index/index', data);

};
