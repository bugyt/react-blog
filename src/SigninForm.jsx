import React from "react";
import { Link } from "react-router-dom";

class SigninForm extends React.Component {
    render() {
        console.log(this.props.onSubmit);

        return (
            <div>
                <form className="form-signin" onSubmit={this.props.onSubmit}>
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label htmlFor="inputEmail" className="sr-only">
                        Email address
                    </label>
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        aria-describedby="emailHelp"
                        onChange={this.props.onEmailChange}
                        required
                        autoFocus
                    />
                    <label htmlFor="inputPassword" className="sr-only">
                        Password
                    </label>
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.props.onPasswordChange}
                        required
                    />

                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me" />{" "}
                            Remember me
                        </label>
                    </div>
                    <button
                        className="btn btn-lg btn-primary btn-block"
                        type="submit"
                        // onClick={this.signIn}
                    >
                        Sign in
                    </button>
                </form>

                <div>
                    <Link to="/signup">{"Signup"}</Link>
                </div>
            </div>
        );
    }
}

export default SigninForm;
