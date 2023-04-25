import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//icon
import logoWhite from "../img/logo-white.png";
import logoBlack from "../img/logo-black.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

import navbarIcon from "../img/navbar/icon.png";
import navbarWireframe from "../img/navbar/wireframe.png";
import navbarUi from "../img/navbar/Ui.png";

const Navbar = (props) => {
	const location = useLocation();
	const [navColor, setNavColor] = useState("white");
	const [navLogo, setNavLogo] = useState(logoWhite);

	useEffect(() => {
		// Update the navbar background color based on the current path
		switch (location.pathname) {
			case "/about":
			case "/helpAndSupport":
				setNavColor("#272d37");
				setNavLogo(logoBlack);
				break;
			default:
				setNavColor("white");
				setNavLogo(logoWhite);
				break;
		}
	}, [location]);

	const [navbarOpen, setNavbarOpen] = useState(false);

	const toggleNavbar = () => {
		setNavbarOpen(!navbarOpen);
	};

	return (
		<header id="header" className="container">
			<img id="logo" src={navLogo} alt="logo" />
			<div
				className={`responsive-wrapper ${
					navbarOpen ? "navbar-open" : ""
				}`}
			>
				<ul id="navbar" className={navbarOpen ? "navbar-drop" : ""}>
					<li>
						<Link
							to="/"
							style={{ color: navColor }}
							onClick={toggleNavbar}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/pricing"
							style={{ color: navColor }}
							onClick={toggleNavbar}
						>
							Our Products
						</Link>
					</li>
					<li>
						<a
							href="#resources"
							className="navbar-resource"
							style={{ color: navColor }}
						>
							Resources{" "}
							<MdKeyboardArrowDown
								className="arrow-icon"
								size={24}
							/>
						</a>
						<div className="resource-popup-menu">
							<a href="#" className="popup-block">
								<h5>Custom Icon Set</h5>
								<p>
									5,000+ custom designed icons across 4
									different styles to user in your projects.
									Included with your Lookscout pack.
								</p>
								<div className="img-container">
									<img
										src={navbarIcon}
										alt=" navbar icon image"
									/>
								</div>
							</a>
							<a href="#" className="popup-block">
								<h5>Wireframe Kits</h5>
								<p>
									Wireframe Kits One low-fidelity & one
									high-fidelity wireframe kit to cover you
									throughout the whole design process.
								</p>
								<div className="img-container">
									<img
										src={navbarWireframe}
										alt=" navbar icon image"
									/>
								</div>
							</a>
							<a href="#" className="popup-block">
								<h5>UI Kits (coming soon)</h5>
								<p>
									Custom & versatile pre-made UI Kits for your
									personal or commercial projects. Included
									with your Lookscout pack.
								</p>
								<div className="img-container">
									<img
										src={navbarUi}
										alt=" navbar icon image"
									/>
								</div>
							</a>
						</div>
					</li>
					<li>
						<Link
							to="/helpAndSupport"
							style={{ color: navColor }}
							onClick={toggleNavbar}
						>
							Contacts
						</Link>
					</li>
				</ul>
				<div
					className={`auth-buttons ${
						navbarOpen ? "navbar-drop" : ""
					}`}
				>
					<Link
						to="/signup"
						className="button button--transparent"
						onClick={toggleNavbar}
					>
						Sign Up
					</Link>
					<Link
						to="/login"
						className="button button--blue"
						onClick={toggleNavbar}
					>
						Log In
					</Link>
				</div>
			</div>
			<HiMenu
				className="navbar-menu"
				size={28}
				onClick={toggleNavbar}
				style={{ color: navColor }}
			/>
		</header>
	);
};

export default Navbar;
