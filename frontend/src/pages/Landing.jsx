import React from "react";

//img
import heroGgLaptop from "../img/hero-img/heroBg-laptop.png";

import productFeatureLaptop from "../img/product-img/product-feature-laptop.png";

import ctaDataLaptop from "../img/cta-img/cta-data-laptop.png";

import BlogImg1Laptop from "../img/blog-img/blog-img-1-laptop.png";
import BlogImg2Laptop from "../img/blog-img/blog-img-2-laptop.png";
import BlogImg3Laptop from "../img/blog-img/blog-img-3-laptop.png";
import BlogImg4Laptop from "../img/blog-img/blog-img-4-laptop.png";

import customerLogoImg from "../img/customer-img/customer-image-1x.png";

//components
import AboutBlock from "../components/AboutBlock";
import FeatureBlock from "../components/FeatureBlock";

//icons
import { AiFillStar } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FiCheck } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import aboutIcon1 from "../img/about-icons/about-icon-1.png";
import aboutIcon2 from "../img/about-icons/about-icon-2.png";
import aboutIcon3 from "../img/about-icons/about-icon-3.png";
import aboutIcon4 from "../img/about-icons/about-icon-4.png";
import aboutIcon5 from "../img/about-icons/about-icon-5.png";
import aboutIcon6 from "../img/about-icons/about-icon-6.png";
import aboutIcon7 from "../img/about-icons/about-icon-7.png";
import aboutIcon8 from "../img/about-icons/about-icon-8.png";

import productIcon1 from "../img/product-img/product-icon-1.png";
import productIcon2 from "../img/product-img/product-icon-2.png";
import productIcon3 from "../img/product-img/product-icon-3.png";

const Landing = () => {
	return (
		<div id="landing">
			<section id="hero-section">
				<img
					className="hero-bg"
					src={heroGgLaptop}
					alt="landing background image"
				/>
				<div className="hero-block">
					<div className="hero-block__star-container">
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
					</div>
					<h1 className="container">
						Your Supercharged Design Workflow.
					</h1>
					<p className="container">
						We’ve been told it is possible to revolutionize the
						payment industry. We have not reinvented the wheel, we
						decided to build upon it - successfully.
					</p>
					<div className="hero-block__cta-btn-container">
						<button className="button--blue">Get Started</button>
						<button className="button--grey">Contact Us</button>
					</div>
				</div>
			</section>
			<section id="about-section">
				<h2 className="subheading">Work Easier Today</h2>
				<p className="container subdescription">
					Leverage agile frameworks to provide a robust synopsis for
					high level overviews. Iterative approaches to corporate
					strategy foster collaborative thinking to further the
					overall value proposition.{" "}
				</p>
				<div className="about-grid-wrapper container">
					<AboutBlock
						icon={aboutIcon1}
						h3="Work Easier Today"
						p="Leverage agile frameworks to provide a synopsis forhigh level overviews."
					/>
					<AboutBlock
						icon={aboutIcon2}
						h3="Our Channels"
						p="Organically grow the holistic world view of disruptive innovation and amazing Concepts. "
					/>
					<AboutBlock
						icon={aboutIcon3}
						h3="API Connects "
						p="Bring to the table win-win  strategies to ensure proactive domination. "
					/>
					<AboutBlock
						icon={aboutIcon4}
						h3="Messaging for all"
						p="User generated content in real-time will have multiple touchpoints for offshoring."
					/>
					<AboutBlock
						icon={aboutIcon5}
						h3="Accessibility "
						p="Bring to the table win-win  strategies to ensure proactive domination. "
					/>
					<AboutBlock
						icon={aboutIcon6}
						h3="Apps"
						p="Keeping your eye on the ball while performing a deep dive on the start-up."
					/>
					<AboutBlock
						icon={aboutIcon7}
						h3="Workflow Builder"
						p="User generated content in real-time will have multiple touchpoints for offshoring."
					/>
					<AboutBlock
						icon={aboutIcon8}
						h3="Searching"
						p="Organically grow the holistic world view of disruptive innovation and amazing Concepts. "
					/>
				</div>
			</section>
			<section id="product-features-section">
				<h2 className="subheading">Redefining Product Features</h2>
				<p className="container subdescription">
					Keeping your eye on the ball while performing a deep dive on
					the start-up mentality to derive convergence on
					cross-platform integration.
				</p>
				<div className="pdt-feature-container container">
					<table>
						<tbody>
							<FeatureBlock
								icon={productIcon1}
								h3="Explore ideas together"
								p="Engage audience segments and finally create actionable insights. Amplify vertical integration."
							/>
							<FeatureBlock
								icon={productIcon2}
								h3="Bring those ideas to life"
								p="Engage audience segments and finally create actionable insights. Amplify vertical integration."
							/>
							<FeatureBlock
								icon={productIcon3}
								h3="Ship better outcomes"
								p="Engage audience segments and finally create actionable insights. Amplify vertical integration."
							/>
						</tbody>
					</table>

					<img
						className="product-img"
						src={productFeatureLaptop}
						alt="Product Feature Image"
					/>
				</div>
			</section>
			<section id="cta-section">
				<div className="container cta-container">
					<img
						className="cta-img"
						src={ctaDataLaptop}
						alt="cta image"
					/>
					<div className="cta-content-container">
						<h2 className="subheading">
							Demonstrate branding consequently think outside the
							box and beyond
						</h2>
						<p>
							Velit purus egestas tellus phasellus. Mattis eget
							sed faucibus magna vulputate pellentesque a diam
							tincidunt. Aenean malesuada tellus tellus faucibus
							mauris quisque mauris in.
						</p>
						<ul>
							<li>
								<FiCheck size={22} /> Enterprise-grade security
							</li>
							<li>
								<FiCheck size={22} /> 99.9% guaranteed uptime
								SLA
							</li>
							<li>
								<FiCheck size={22} /> Designated customer
								success team
							</li>
						</ul>
						<button className="button--blue">
							Start now <AiOutlineArrowRight size={20} />
						</button>
					</div>
				</div>
			</section>
			<section id="customer-section">
				<h2 className="subheading">Proud to Be Used By</h2>
				<p className="container subdescription">
					Professionally cultivate one-to-one customer service with
					robust ideas. Dynamically innovate resource-leveling
					customer service for state of the art customer service.
				</p>
				<div className="customer-img-wrapper">
					<img src={customerLogoImg} alt="customer logo" />
				</div>
				<a href="#">
					Show more <AiOutlineArrowRight size={20} />
				</a>
			</section>
			<section id="price-section">
				<h2 className="subheading">Pricing that Adapts to You</h2>
				<p className="container  subdescription">
					Keeping your eye on the ball while performing a deep dive on
					the start-up mentality to derive convergence on integration.
					Collaboratively administrate markets via networks.{" "}
				</p>
				<div className="price-container container">
					<div className="price-block">
						<span>Basic</span>
						<h4>Basic Package</h4>
						<p>$39.99</p>
						<ul>
							<li>
								<i className="check">
									<FiCheck size={22} />
								</i>{" "}
								Access to all features
							</li>
							<li>
								<i className="check">
									<FiCheck size={22} />
								</i>{" "}
								5 watchlists included
							</li>
							<li>
								<i className="close">
									<IoMdClose size={22} />
								</i>{" "}
								Exclusive premium widgets
							</li>
							<li>
								<i className="close">
									<IoMdClose size={22} />
								</i>{" "}
								Priority support
							</li>
							<li>
								<i className="close">
									<IoMdClose size={22} />
								</i>{" "}
								Amplifying stakeholder{" "}
							</li>
						</ul>
						<button className="button--blue">
							Try now <AiOutlineArrowRight size={20} />
						</button>
					</div>
					<div className="price-block">
						<span>Advanced</span>
						<h4>Advanced Package</h4>
						<p>$59.99</p>
						<ul>
							<li>
								<i className="check">
									<FiCheck size={22} />
								</i>{" "}
								Access to all features
							</li>
							<li>
								<i className="check">
									<FiCheck size={22} />
								</i>{" "}
								25 watchlists included
							</li>
							<li>
								<i className="check">
									<FiCheck size={22} />
								</i>{" "}
								Exclusive premium widgets
							</li>
							<li>
								<i className="close">
									<IoMdClose size={22} />
								</i>{" "}
								Priority support
							</li>
							<li>
								<i className="close">
									<IoMdClose size={22} />
								</i>{" "}
								Amplifying stakeholder{" "}
							</li>
						</ul>
						<button className="button--blue">
							Try now <AiOutlineArrowRight size={20} />
						</button>
					</div>
					<div className="price-block">
						<span>Elite</span>
						<h4>Elite Package</h4>
						<p>$99.99</p>
						<ul>
							<li>
								<i className="check">
									<FiCheck size={22} />
								</i>{" "}
								Access to all features
							</li>
							<li>
								<i className="check">
									<FiCheck size={22} />
								</i>{" "}
								100 watchlists included
							</li>
							<li>
								<i className="check">
									<FiCheck size={22} />
								</i>{" "}
								Exclusive premium widgets
							</li>
							<li>
								<i className="check">
									<FiCheck size={22} />
								</i>{" "}
								Priority support
							</li>
							<li>
								<i className="check">
									<FiCheck size={22} />
								</i>{" "}
								Amplifying stakeholder{" "}
							</li>
						</ul>
						<button className="button--blue">
							Try now <AiOutlineArrowRight size={20} />
						</button>
					</div>
				</div>
			</section>

			<section id="blog-section">
				<h2 className="subheading">Latest Blog Posts</h2>
				<p className="container  subdescription">
					Completely synergize resource taxing relationships via
					premier niche markets. Professionally cultivate one-to-one
					customer service with robust ideas.
				</p>
				<div className="container blog-container">
					<div className="blog-top">
						<img src={BlogImg1Laptop} alt="blog top image" />
						<h3>Reach your users with new tools.</h3>
						<p>
							Efficiently unleash cross-media information without
							cross-media value. Quickly maximize.Efficiently
							unleash cross-media information without cross-media
							value. Quickly maximize.Efficiently unleash
							cross-media.
						</p>
						<span>25 Apr 2022</span>
					</div>
					<div className="blog-side">
						<div className="blog-side-block ">
							<img
								className="img-2"
								src={BlogImg2Laptop}
								alt="blog top image"
							/>
							<div>
								<h3>Reach your users with new tools</h3>
								<p>
									Efficiently unleash cross-media information
									without cross-media value. Quickly maximize.
								</p>
								<span>25 Apr 2022</span>
							</div>
						</div>
						<div className="blog-side-block ">
							<img
								className="img-3"
								src={BlogImg3Laptop}
								alt="blog top image"
							/>
							<div>
								<h3>Faster ways to reach your customer</h3>
								<p>
									Completely synergize resource taxing
									relationships via premier niche markets.
								</p>
								<span>25 Apr 2022 - Blog theme</span>
							</div>
						</div>
						<div className="blog-side-block ">
							<img
								className="img-4"
								src={BlogImg4Laptop}
								alt="blog top image"
							/>
							<div>
								<h3>Revolutionizing the Design Industry</h3>
								<p>
									Efficiently unleash cross-media information
									without cross-media value. Quickly maximize.
								</p>
								<span>25 Apr 2022 - Blog theme</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="promo-section">
				<div className="container promo-container">
					<div className="promo-info-container">
						<h2 >
							Welcome to your new digital reality that will rock
							your world.
						</h2>
						<p>
							Let us help you take you from zero to serious
							business and beyond. Our no-strings attached free
							trial lets you test our product today.
						</p>
					</div>
					<div className="email-form">
						<input type="email" placeholder="Enter your email" />
						<button className="button--blue">Submit</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Landing;
