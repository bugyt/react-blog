import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import SigninForm from "./SigninForm";

var isLoggedIn = false;
class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signIn = this.signIn.bind(this);

        this.state = {
            email: "",
            password: ""
        };
    }
    render() {
        return (
            <SigninForm onSubmit={this.signIn}
                        onEmailChange={this.handleEmailChange}
                        onPasswordChange={this.handlePasswordChange} />
        );
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    signIn(event) {
        event.preventDefault();
        
        console.log(
            "Email address is " +
                this.state.email +
                " Password is " +
                this.state.password
        );

        if (window.fetch) {
            console.log("fetch");
            fetch("/signin", {
                method: "post",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
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
                        "Il y a eu un problème avec l'opération fetch: " +
                            error.message
                    );
                });
        } else {
            axios
                .post("/signin", {
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

export default Signin;