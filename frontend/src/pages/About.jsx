import React from "react";

//compoennt
import Faq from "../components/Faq";

//icons
import { FiCheck } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import aboutIcon1 from "../img/about-message-icons/about-icon-1.png";
import aboutIcon2 from "../img/about-message-icons/about-icon-2.png";
import aboutIcon3 from "../img/about-message-icons/about-icon-3.png";

import comLogo1 from "../img/about-testimonal-logo/logo (1).png";
import comLogo2 from "../img/about-testimonal-logo/logo (2).png";
import comLogo3 from "../img/about-testimonal-logo/logo (3).png";
import comLogo4 from "../img/about-testimonal-logo/logo (4).png";
import comLogo5 from "../img/about-testimonal-logo/logo (5).png";
import comLogo6 from "../img/about-testimonal-logo/logo (6).png";

//img
import brandImgLaptop from "../img/brand-img/branding-img-laptop.png";

import teamMember1 from "../img/about-team-img/member1.png";
import teamMember2 from "../img/about-team-img/member2.png";
import teamMember3 from "../img/about-team-img/member3.png";

const SocialMediaIcons = () => {
	return (
		<div className="social-icons">
			<a href="https://twitter.com">
				<i className="fab fa-twitter"></i>
			</a>
			<a href="https://www.facebook.com">
				<i className="fab fa-facebook"></i>
			</a>
			<a href="https://www.instagram.com">
				<i className="fab fa-instagram"></i>
			</a>
			<a href="https://telegram.org/">
				<i className="fab fa-telegram"></i>
			</a>
		</div>
	);
};

const About = () => {
	return (
		<div id="about-page">
			<section className="about-hero-section">
				<a href="#">1% OF THE INDUSTRY</a>
				<h1>Hype got you here. Stay for the support.</h1>
				<p>
					We’ve been told it is possible to revolutionize the payment
					industry. We have not reinvented the wheel, we decided to
					build upon it - successfully.
				</p>
			</section>
			<section className="about-message-section container">
				<h2 className="subheading">Messaging for all</h2>
				<p className="subdescription">
					User generated content in real-time will have multiple
					touchpoints for offshoring.
				</p>
				<div className="message-block-container container">
					<div className="message-block">
						<img src={aboutIcon1} alt="about Icon 1" />
						<h3>Easier Work Organization</h3>
						<p>
							Efficiently unleash cross-media information without
							cross-media value. Quickly timely deliverables for
							real-time schemas.{" "}
						</p>
					</div>
					<div className="message-block">
						<img src={aboutIcon2} alt="about Icon 2" />
						<h3>Fast Connection</h3>
						<p>
							Completely pursue scalable customer cross- media
							through potentialities. Holistically quickly
							installed portals.{" "}
						</p>
					</div>
					<div className="message-block">
						<img src={aboutIcon3} alt="about Icon 3" />
						<h3>Streamlined Processes</h3>
						<p>
							Objectively innovate empowered scalable manufactured
							products whereas parallel platforms predominate
							extensible.
						</p>
					</div>
				</div>
			</section>

			<section className="container about-brand-section">
				<div className="brand-info-wrapper">
					<h2>Demonstrate branding consequently think outside</h2>
					<p>
						Velit purus egestas tellus phasellus. Mattis eget sed
						faucibus magna vulputate pellentesque a diam tincidunt.
						Aenean malesuada tellus tellus faucibus mauris quisque
						mauris in.
					</p>
					<ul>
						<li>
							<FiCheck size={22} /> Enterprise-grade security
						</li>
						<li>
							<FiCheck size={22} /> 99.9% guaranteed uptime SLA
						</li>
						<li>
							<FiCheck size={22} /> Designated customer success
							team
						</li>
					</ul>
					<button className="button--blue">
						Start now <AiOutlineArrowRight size={20} />
					</button>
				</div>
				<img
					className="brand-img"
					src={brandImgLaptop}
					alt="brand image"
				/>
			</section>
			<section className="container about-team-section">
				<h2 className="subheading">The Core of Our Team</h2>
				<p className=" subdescription">
					Organically grow the holistic world view of disruptive
					innovation via workplace diversity and empowerment of people
					and great talent that truly rocks.
				</p>
				<div className="team-member-container">
					<div className="team-member">
						<img src={teamMember1} alt=" img of team member 1" />
						<h3>Morgan Drew</h3>
						<p>Manager</p>
						<SocialMediaIcons />
					</div>
					<div className="team-member">
						<img src={teamMember2} alt=" img of team member 1" />
						<h3>Morgan Drew</h3>
						<p>Manager</p>
						<SocialMediaIcons />
					</div>
					<div className="team-member">
						<img src={teamMember3} alt=" img of team member 1" />
						<h3>Morgan Drew</h3>
						<p>Manager</p>
						<SocialMediaIcons />
					</div>
				</div>
			</section>
			<section className="about-faq-section container">
				<h2 className="subheading">Frequently asked questions</h2>
				<p className=" subdescription">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s,
				</p>
				<Faq />
			</section>
			<section className="about-auth-section">
				<div className=" auth-content-container">
					<a href="#">1% OF THE INDUSTRY</a>
					<h1>
						Welcome to your new digital reality that which will rock
						your world truly at all.
					</h1>
					<div className="auth-button-container">
						<button className="button--white">Sign Up</button>
						<button className="button--blue">Log In</button>
					</div>
				</div>
				<div className="logo-container container">
					<img src={comLogo1} alt="testminal " />
					<img src={comLogo2} alt="testminal " />
					<img src={comLogo3} alt="testminal " />
					<img src={comLogo4} alt="testminal " />
					<img src={comLogo5} alt="testminal " />
					<img src={comLogo6} alt="testminal " />
				</div>
			</section>
		</div>
	);
};

export default About;
