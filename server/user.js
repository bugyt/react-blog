var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var url = "mongodb://localhost:27017/Blog";

module.exports = {
	signup: function(name, email, password, callback) {
		MongoClient.connect(url, function(err, db) {
			console.log("connected");
			db.collection("user").insertOne({
				name: name,
				email: email,
				password: password
			},
			function(err, result) {
				if (err != null) {
					callback(false);
				} else {
					callback(true);
				}

				// assert.equal(err, null,"mess");
				console.log("Saved the user sign up details.");
			});
		});
	},

	validateSignIn: function(username, password, callback) {
		MongoClient.connect(url, function(err, db) {
			db.collection("user").findOne({
				email: username,
				password: password
			},
			function(err, result) {
				if (result == null) {
					callback(false);
				} else {
					callback(true);
				}
			});
		});
	}
};
