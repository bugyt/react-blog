import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./css/signin.css";

class SignupForm extends React.Component {
	render() {
		console.log(this.props.onSubmit);
		return (
			<div>
				<form className="form-signin" onSubmit={this.props.onSubmit}>
					<h2 className="form-signin-heading">Please sign up</h2>
					{this.props.errors.summary && <p className="error-message">{this.props.errors.summary}</p>}
					<label htmlFor="inputName" className="sr-only">
						Name
					</label>
					<input
						type="name"
						name="name"
						onChange={this.props.onChange}
						id="inputName"
						className="form-control"
						placeholder="Name"
						value={this.props.user.name}
						required
						autoFocus
					/>
					<label htmlFor="inputEmail" className="sr-only">
						Email address
					</label>
					<input
						type="email"
						name="email"
						onChange={this.props.onChange}
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
						name="password"
						onChange={this.props.onChange}
						id="inputPassword"
						className="form-control"
						placeholder="Password"
						required
					/>

					<button
						className="btn btn-lg btn-primary btn-block"
						type="submit"
					>
						{"Sign up"}
					</button>
					<small id="emailHelp" className="form-text text-muted">
						We'll never share your email with anyone else.
					</small>
					<small id="emailHelp" className="form-text text-muted">
						Already have an account?{" "}
						<Link to={"/signin"}>Sign in</Link>
					</small>
				</form>
				<div>
					<Link to="/signin">{"Signin"}</Link>
				</div>
			</div>
		);
	}
}

SignupForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired
};
export default SignupForm;
