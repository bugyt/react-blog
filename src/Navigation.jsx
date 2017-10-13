import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
var isLoggedIn = false;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  render() {
    var signin = (
      <li
        key="signin"
        className={
          "nav-item " +
          (this.props.location.pathname === "/signin" ? "active" : "")
        }
      >
        <Link to="/signin" className="nav-link">
          {"Sign in"}
        </Link>
      </li>
    );
    var signup = (
      <li
      key="signup"
        className={
          "nav-item " +
          (this.props.location.pathname === "/signup" ? "active" : "")
        }
      >
        <Link to="/signup" className="nav-link">
          {"Sign up"}
        </Link>
      </li>
    );
    var signout = (
      <li
      key="signout"
        className={
          "nav-item " +
          (this.props.location.pathname === "/signout" ? "active" : "")
        }
      >
        <Link to="/signout" className="nav-link">
          {"Sign out"}
        </Link>
      </li>
    );

    return (
      <div>
        <ul className="navbar-nav mr-auto">
          <li
          key="home"
            className={
              "nav-item " +
              (this.props.location.pathname === "/" ? "active" : "")
            }
          >
            <Link to="/" className="nav-link">
              {"Home"} <span className="sr-only">(current)</span>
            </Link>
          </li>
          {(isLoggedIn ? signout : [signin, signup])}
        </ul>
      </div>
    );
  }

  signOut() {
    var that = this;
    if (that.fetch) {
      console.log("fetch");
      fetch("/signout", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({})
      })
        .then(
          function(response) {
            if (response.ok) {
              isLoggedIn = true;
              console.log("OK");
              response.text().then(function(text) {
                console.log(text);
              });
              this.props.history.push("/");
            } else {
              console.log("Mauvaise réponse du réseau");
            }
          }.bind(this)
        )
        .catch(function(error) {
          console.log(
            "Il y a eu un problème avec l'opération fetch: " + error.message
          );
        });
    } else {
      axios
        .post("/signin", {})
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}

export default Navigation;