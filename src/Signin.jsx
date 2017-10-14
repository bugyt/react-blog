import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SigninForm from "./SigninForm";

var isLoggedIn = false;
class Signin extends React.Component {
    constructor(props) {
        super(props);
        // set the initial component state
        this.state = {
            errors: {},
            user: {
                email: "",
                password: ""
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }
    render() {
        return (
            <SigninForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        );
    }

    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user
        });
    }

    processForm(event) {
        event.preventDefault();

        console.log(
            "Email address is " +
                this.state.user.email +
                " Password is " +
                this.state.user.password
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
                    email: this.state.user.email,
                    password: this.state.user.password
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
                    email: this.user.state.email,
                    password: this.user.state.password
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
