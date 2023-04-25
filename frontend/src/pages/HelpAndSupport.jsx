import React from "react";

//image
import heroAvatar from "../img/hs-img/hero-avatar.png";
import contentImg1 from "../img/hs-img/content1.png";
import contentImg2 from "../img/hs-img/content2.png";

//icons

import { IoMdCheckmark } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import ui from "../img/hs-img/sidebar-icon/ui-ux.png";
import design from "../img/hs-img/sidebar-icon/design.png";
import management from "../img/hs-img/sidebar-icon/management.png";
import business from "../img/hs-img/sidebar-icon/business.png";
import finance from "../img/hs-img/sidebar-icon/finance.png";
import crypto from "../img/hs-img/sidebar-icon/crypto.png";
import programming from "../img/hs-img/sidebar-icon/programming.png";
import privacy from "../img/hs-img/sidebar-icon/privacy.png";
import termofuse from "../img/hs-img/sidebar-icon/termsofuse.png";
import contact from "../img/hs-img/sidebar-icon/contact.png";
import team from "../img/hs-img/sidebar-icon/team.png";
import aboutus from "../img/hs-img/sidebar-icon/aboutus.png";
import phone from "../img/hs-img/phone-icon.png";
import email from "../img/hs-img/email-icon.png";

const HelpAndSupport = () => {
	return (
		<div>
			<section className="hs-head-section">
				<div className=" container">
					<h1>Get started with LookScout </h1>
					<p>
						Neque eos nemo corrupti dolores aliquam ut et
						repudiandae. Illum aut exercitationem ut beatae et amet
						inventore fuga odio.{" "}
					</p>
					<button>safe</button>
					<button>24/7</button>
					<div className="profile-section">
						<img src={heroAvatar} alt="" />
						<p>
							Dave Jones <span>February 09th, 2020</span>
						</p>
					</div>
				</div>
			</section>
			<section className="hs-content-section container">
				<div className="main-content">
					<article>
						<h3>Prerequisites</h3>
						<p>
							Iste laboriosam consequuntur et et. Et illum qui
							odit tempora dolores et sapiente temporibus. Eveniet
							eos eveniet repellendus minus quia porro.
							Consequatur sed assumenda. Quam ea sed eum totam
							fugit sequi ratione accusamus. Ut ut rerum minus
							dignissimos iusto alias veniam quis in.
						</p>
						<p>
							Perferendis et tempore. Modi et laborum
							voluptatibus. Cumque consequatur consequatur aut ut
							quis qui ut adipisci. Quisquam eius earum cum
							aliquam dolore qui corrupti eveniet.Reprehenderit
							aut et accusamus ut nulla. Sint numquam sunt. Alias
							aliquam alias a dolore enim eius. Sint neque
							repellendus quis repellat unde autem consectetur
							veritatis adipisci.{" "}
						</p>
					</article>
					<article>
						<h3>First thing you need to do</h3>
						<img
							src={contentImg1}
							alt="content image 1"
							className="content1"
						/>
						<p>Figure one: Type here your description</p>
						<p>
							Perferendis et tempore. Modi et laborum
							voluptatibus. Cumque consequatur consequatur aut ut
							quis qui ut adipisci. Quisquam eius earum cum
							aliquam dolore qui corrupti eveniet.Reprehenderit
							aut et accusamus ut nulla. Sint numquam sunt. Alias
							aliquam alias a dolore enim eius.{" "}
						</p>
					</article>
					<article>
						<h3>Second thing you need to do</h3>
						<img
							src={contentImg2}
							alt="content image 2"
							className="content2"
						/>
						<p>Figure one: Type here your description</p>
						<p>
							Perferendis et tempore. Modi et laborum
							voluptatibus. Cumque consequatur consequatur aut ut
							quis qui ut adipisci. Quisquam eius earum cum
							aliquam dolore qui corrupti eveniet.Reprehenderit
							aut et accusamus ut nulla. Sint numquam sunt. Alias
							aliquam alias a dolore enim eius.{" "}
						</p>
					</article>
					<div className="question">
						<h3>Did you find this article helpul?</h3>
						<div className="button-container">
							<button className="button--transparent">
								<IoMdCheckmark size={22} />
							</button>
							<button className="button--transparent">
								<IoMdClose size={22} />
							</button>
						</div>
					</div>
				</div>
				<div className="side-bar">
					<h6 className="active">Category</h6>
					<ul>
						<li className="active">
							<img src={ui} />
							UI/UX
						</li>
						<li>
							<img src={design} />
							Design
						</li>
						<li>
							<img src={management} /> Management
						</li>
						<li>
							<img src={business} />
							Business
						</li>
						<li>
							<img src={finance} />
							Finance
						</li>
						<li>
							<img src={crypto} />
							Crypto
						</li>
						<li>
							<img src={programming} />
							Programing
						</li>
					</ul>
					<h6>Others</h6>
					<ul>
						<li>
							<img src={privacy} />
							Privacy Policy
						</li>
						<li>
							<img src={termofuse} />
							Terms of use
						</li>
						<li>
							<img src={contact} />
							Contacts
						</li>
						<li>
							<img src={team} />
							Team
						</li>
						<li>
							<img src={aboutus} />
							About Us
						</li>
					</ul>
				</div>
			</section>
			<section className="hs-expand-button">
				<button className="button--blue">View All</button>
			</section>
			<section className="hs-assistance-section container">
				<h2 className="subheading">Need personal assistance?</h2>
				<p className="subdescription">
					If you still didn’t find an answers you can always contact
					us
				</p>
				<div className="contact-container">
					<a href="tel:+12868632077" class="phone">
						<img src={phone} alt="phone icon" />
						<h3>286-863-2077</h3>
						<p>Our support is here for you</p>
					</a>
					<a href="mailto:LookScout@domain.com" class="email">
						<img src={email} alt="email icon" />
						<h3>LookScout@domain.com</h3>
						<p>You’ll get a reply in 4 to 12 hours.</p>
					</a>
				</div>
			</section>
			<section className="hs-auth-section">
				<div className="auth-container container">
					<h2>Welcome to your new digital reality, now. Wow.</h2>
					<div className="button-container">
						<button className="button--blue">Sign up</button>
						<button className="button--grey">Log in</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HelpAndSupport;
