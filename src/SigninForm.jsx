import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./css/signin.css";

class SigninForm extends React.Component {
    render() {
        
        return (
            <div>
                <form className="form-signin" onSubmit={this.props.onSubmit}>
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label htmlFor="inputEmail" className="sr-only">
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        aria-describedby="emailHelp"
                        onChange={this.props.onChange}

                        required
                        autoFocus
                    />
                    <label htmlFor="inputPassword" className="sr-only">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.props.onChange}
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

SigninForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};


export default SigninForm;
