import React from "react";
import { Link, useNavigate } from "react-router-dom";

import forgotPasswordImg from "../img/auth-img/forgotPassword.png";
    
const Signup = () => {
    const navigate = useNavigate();

	return (
		<div className="auth-section forgot-password">
			<section>
				<hr />
				<div className="container flex-wrapper">
					<div className="auth-form">
						<h1>Reset password</h1>
						<form>
							<p className="reset-password-subhead">
								Enter your email to reset your password
							</p>
							<label for="signup-email">Email Address</label>
							<input
								type="email"
								id="signup-email"
								placeholder="Email"
							/>
							<button className="signup-btn button--blue">
								Continue
							</button>
						</form>
						<p className="transfer">
							<Link onClick={() => navigate(-1)}>
								<i class="fa-solid fa-arrow-left"></i>
								Go back to the previous step
							</Link>
						</p>
					</div>
					<img src={forgotPasswordImg} alt="signup" />
				</div>
			</section>
		</div>
	);
};

export default Signup;
