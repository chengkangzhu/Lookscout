import React from "react";
import { Link } from "react-router-dom";

import signupImg from "../img/auth-img/signup.png";

//icons
import { BsGoogle } from "react-icons/bs";
const Signup = () => {
	return (
		<div className="auth-section">
			<section>
				<hr />
				<div className="container flex-wrapper">
					<div className="auth-form">
						<h1>Join Us!</h1>
						<button className="signin-google-btn">
							<span class="me-2">
								<BsGoogle size={22} />
							</span>
							Sign in with Google
						</button>
						<form>
							<div className="form-header-container">
								<div className="hr"></div>
								<p className="form-header">
									Sign In with your Email
								</p>
								<div className="hr"></div>
							</div>
							<label for="signup-email">Email Address</label>
							<input
								type="email"
								id="signup-email"
								placeholder="Insert your email"
							/>
							<label for="signup-password">Password</label>
							<input
								type="password"
								id="signup-password"
								placeholder="Insert your password"
							/>
							<div className="footer-flex-container">
								<label><input type="checkbox" />Keep me logged in</label>
								<Link to="/forgotPassword">Forgot Password?</Link>
							</div>
							<button className="signup-btn button--blue">Sign Up</button>
						</form>
						<p className="transfer">Already have an account?<Link to="/login">Log in</Link></p>
					</div>
					<img src={signupImg} alt="signup" />
				</div>
			</section>
		</div>
	);
};

export default Signup;
