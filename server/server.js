var express = require("express");
var session = require("express-session");
var path = require("path");
var bodyParser = require("body-parser");
var user = require("./user");
var helmet = require("helmet");
// var Home = require("./html/jsx/Home.jsx");

var app = express();
var sessions;

// Security
app.use(helmet());
// app.disable('x-powered-by'); (If you use helmet.js, it takes care of this for you.)

app.use(express.static(path.join(__dirname, "../build")));
app.use(
	session({ secret: "my-secret", saveUninitialized: false, resave: false })
);
app.use(bodyParser.json());

// Pour que tous les liens fonctionne
app.get("*", function(req, res) {

	console.log(sessions);
	res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});


app.post("/signin", function(req, res) {
	sessions = req.session;
	console.log(req.user);
	var user_name = req.body.email;
	var password = req.body.password;
	
	console.log("signin");
	user.validateSignIn(user_name, password, function(result) {
		if (result) {
			sessions.username = user_name;
			console.log(sessions);
			res.send("success");
		} else {
			res.send("Wrong username password");
		}
	});
});

app.post("/signup", function(req, res) {
	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;
	if (name && email && password) {
		user.signup(name, email, password, function(result) {
			console.log(result);
			if (result) {
				res.send("success");
			} else {
				res.send("Signup failed");
			}
		});
	} else {
		res.send("Failure");
	}
});

app.post("/logout", function(req, res) {
	req.session.destroy(function(err) {
		if (err) {
			console.log(err);
		} else {
			// req.session.destroy();
			// res.redirect('/');	
			console.log(req.session);
  			res.send("logout success!");

		}
	});
});

app.listen(7777, function() {
	console.log("Started listening on port", 7777);
});
