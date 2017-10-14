import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.changeUser = this.changeUser.bind(this);
    this.processForm = this.processForm.bind(this);
    this.state = {
      errors: {},
      user: {
        email: "",
        password: "",
        name: ""
      }
    };
  }

  render() {
    return (
      <div>
        <SignupForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          errors={this.state.errors}
          user={this.state.user}
        />
      </div>
    );
  }

  changeUser(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;
    this.setState({
      user
    });
  }

  processForm(event) {
    event.preventDefault();

    console.log(
      "Signup Process Form : Email address is " +
        this.state.user.name +
        " Password is " +
        this.state.user.password
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
          name: this.state.user.name,
          email: this.state.user.email,
          password: this.state.user.password
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
          name: this.state.user.name,
          email: this.state.user.email,
          password: this.state.user.password
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
