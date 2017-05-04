// Author: Jean-Philippe Beaudet @ S3R3NITY Technology 
//
// AppTemplate
// Version : 0.0.1
// License: GNU 3.0 General Public License
//

var mongoose = require('mongoose');
var fs = require('fs')

exports.index = function (req, res) {
	var username = "Not logged in";
	var isAlreadyLoggedin = false;
	// if the user is logged in 
	if(req.user) {
		username = req.user.username;
		isAlreadyLoggedin = true;
	}
	var map = {
	files: [
		{
			id: 1,
			filename: "jp.txt",
			type: "txt",
			section: "legal",
			path: "legal/jp.txt",
			filehash: "hgdjhfjhfdjhgkjh6763476",
			author: "Jean-philippe beaudet",
			creation_date: "2016-01-01",
			assigned_to:"Jean-philippe beaudet ; alice samson"
		},
		{
			id:2,
			filename: "test.docx",
			type: "doc",
			section: "legal",
			path: "legal/test.docx",
			filehash: "hgdjhfjhfdjhgkjh6763476",
			author: "Testosterone",
			creation_date: "2017-01-01",
			assigned_to:""
		},
		{
			id:3,
			filename: "test_folder",
			type: "folder",
			section: "legal",
			path: "legal/test.docx",
			filehash: "hgdjhfjhfdjhgkjh6763476",
			author: "Testosterone",
			creation_date: "2017-01-01",
			assigned_to:""
		}
		]
	}
	var inbox = {
	msg: [
		{
			id: 1,
			read: "true",
			isNew: "false",
			subject: "hello alice 1",
			from: "bob@virtuba",
			to: "alice@virtuba",
			filehash: "hgdjhfjff88^%778%",
			author: "Jean-philippe beaudet",
			creation_date: "2016-01-01",
			assigned_to: "Jean-philippe beaudet",
			has_file: "false"
		},
		{
			id: 2,
			read: "false",
			isNew: "true",
			subject: "hello alica",
			from: "bob@virtuba",
			to: "alice@virtuba",
			filehash: "hgdjhfjff88^%778%",
			author: "Jean-philippe beaudet",
			creation_date: "2016-01-01",
			assigned_to: "Jean-philippe beaudet",
			has_file: "test.txt ; jp.txt"
		}
		]
	}
	var data = {
		title: " Virtuba Navigator",
		username: username,
		isAlreadyLoggedin:isAlreadyLoggedin,
		map: map ,
		inbox: inbox
	};
	res.render('index/index', data);
};
