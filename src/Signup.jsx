import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Signup extends React.Component {
  render() {
    return (
      <div>
        <form className="form-signin">
          <h2 className="form-signin-heading">Please sign up</h2>
          <label htmlFor="inputName" className="sr-only">
            Name
          </label>
          <input
            type="name"
            onChange={this.handleNameChange}
            id="inputName"
            className="form-control"
            placeholder="Name"
            required
            autoFocus
          />
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            onChange={this.handleEmailChange}
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            onChange={this.handlePasswordChange}
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />

          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={this.signUp}
            type="button"
          >
            Sign up
          </button>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </form>
        <div>
          <Link to="/signin">{"Signin"}</Link>
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.signUp = this.signUp.bind(this);
    console.log("constructor");
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  signUp() {
    var that = this;
    console.log(this);
    console.log(
      "Email address is " +
        this.state.name +
        " Password is " +
        this.state.password
    );

    if (window.fetch) {
      console.log("fetch");
      fetch("/signup", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
      })
        .then(function(response) {
          if (response.ok) {
            console.log("OK");
            response.text().then(function(text) {
              console.log(text);
            });
          } else {
            console.log("Mauvaise réponse du réseau");
          }
        })
        .catch(function(error) {
          console.log(
            "Il y a eu un problème avec l'opération fetch: " + error.message
          );
        });
    } else {
      axios
        .post("/signup", {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
export default Signup;