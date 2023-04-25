import React from "react";
import logo from "../img/logo-white.png";
import { useLocation } from "react-router-dom";
//icons
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

//component
import FooterList from "./FooterList";

const Footer = () => {
	const location = useLocation();

	// Check if current route path is /login or /signup
	if (location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/forgotPassword") return null

	return (
		<section id="footer-section">
			<div className="container footer-container">
				<div className="ul-container">
					<FooterList
						head="Products"
						one="Features"
						two="Integrations"
						three="Enterprise"
						four="Solutions"
					/>
					<FooterList
						head="Products"
						one="Features"
						two="Integrations"
						three="Enterprise"
						four="Solutions"
					/>
					<FooterList
						head="Products"
						one="Features"
						two="Integrations"
						three="Enterprise"
						four="Solutions"
					/>
					<FooterList
						head="Resources"
						one="Partners"
						two="Developers"
						three="Community"
						four="Apps"
					/>
					<FooterList
						head="Company"
						one="About Us"
						two="Leadership"
					/>
				</div>
				<div className="bottom-footer">
					<img src={logo} alt="footer logo" />
					<p className="copyright">
						© 2023 Lookscout. All Rights Reserved.
					</p>
					<div className="social-media-container">
						<FaFacebook size={24} />
						<AiFillGoogleCircle size={26} />
						<AiFillApple size={28} />
						<AiOutlineInstagram size={26} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
