import React, { useState } from "react";


//icons
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import aboutIcon1 from "../img/price-about-icon/price-about-icon (1).png";
import aboutIcon2 from "../img/price-about-icon/price-about-icon (2).png";
import aboutIcon3 from "../img/price-about-icon/price-about-icon (3).png";
import aboutIcon4 from "../img/price-about-icon/price-about-icon (4).png";
import productLaptop from "../img/price-product-img/productLaptop.png";

//img
import customer1 from "../img/price-customer/avatar (1).png";
import customer2 from "../img/price-customer/avatar (2).png";
import customer3 from "../img/price-customer/avatar (3).png";

const CustomerBlock = (props) => {
	return (
		<div className="customer-block">
			<div>
				<AiFillStar className="orange" size={22} />
				<AiFillStar className="orange" size={22} />
				<AiFillStar className="orange" size={22} />
				<AiFillStar className="orange" size={22} />
				<AiFillStar className="grey" size={22} />
			</div>
			<p className="customer-content">{props.content}</p>
			<div className="profile-section">
				<img src={props.imgSrc} alt="porfile picture" />
				<div className="profile-about">
					<p className="profile-name">{props.name}</p>
					<p className="profile-job">{props.job}</p>
				</div>
			</div>
		</div>
	);
};

const Price = () => {
	const [monthOrYear, setMonthOrYear] = useState("month");

	const handleButtonClick = (buttonType) => {
		setMonthOrYear(buttonType);
	};

	return (
		<div>
			<section className="price-hero-section">
				<hr />
				<h1>Hype got you here. Stay for the support.</h1>
				<p>
					We’ve been told it is possible to revolutionize the payment
					industry. We have not reinvented the wheel, we decided to
					build upon it - successfully.
				</p>
			</section>
			<section className="price-price-section">
				<div className="price-button-container ">
					<button
						className={`button--transparent month${
							monthOrYear === "month" ? " active" : ""
						}`}
						onClick={() => handleButtonClick("month")}
					>
						Monthly
					</button>
					<button
						className={`button--transparent year${
							monthOrYear === "year" ? " active" : ""
						}`}
						onClick={() => handleButtonClick("year")}
					>
						Yearly
					</button>
				</div>
				<div className="price-block-container">
					<div className="price-block">
						<h5>
							<span className="price">{monthOrYear === 'year' ? '$' + (25 * 11) : '$25'}</span>/{monthOrYear}
						</h5>
						<p className="price-type">Starter</p>
						<p className="description">
							Demonstrate empathy maps and finally improve
							outcomes.
						</p>
						<ul>
							<li>
								<BsFillCheckCircleFill className="icon icon-blue" />
								24/7 support
							</li>
							<li>
								<BsFillCheckCircleFill className="icon  icon-blue" />
								1 watchlist included
							</li>
							<li>
								<FaRegCircle className="icon  icon-grey" />
								Access to all features
							</li>
							<li>
								<FaRegCircle className="icon icon-grey" />
								Exclusive premium widgets
							</li>
						</ul>
						<button className="button--blue">Buy now</button>
					</div>
					<div className="price-block">
						<h5>
							<span className="price">{monthOrYear === 'year' ? '$' + (50 * 11) : '$50'}</span>/{monthOrYear}
						</h5>
						<p className="price-type">Advanced</p>
						<p className="description">
							Demonstrate empathy maps and finally improve
							outcomes.
						</p>
						<ul>
							<li>
								<BsFillCheckCircleFill className="icon icon-blue" />
								24/7 support
							</li>
							<li>
								<BsFillCheckCircleFill className="icon  icon-blue" />
								5 watchlist included
							</li>
							<li>
								<BsFillCheckCircleFill className="icon  icon-blue" />
								Access to all features
							</li>
							<li>
								<FaRegCircle className="icon icon-grey" />
								Exclusive premium widgets
							</li>
						</ul>
						<button className="button--blue">Buy now</button>
					</div>
					<div className="price-block">
						<h5>
							<span className="price">{monthOrYear === 'year' ? '$' + (90 * 11) : '$90'}</span>/{monthOrYear}
						</h5>
						<p className="price-type">Starter</p>
						<p className="description">
							Demonstrate empathy maps and finally improve
							outcomes.
						</p>
						<ul>
							<li>
								<BsFillCheckCircleFill className="icon icon-blue" />
								24/7 support
							</li>
							<li>
								<BsFillCheckCircleFill className="icon  icon-blue" />
								∞ watchlists included
							</li>
							<li>
								<BsFillCheckCircleFill className="icon  icon-blue" />
								Access to all features
							</li>
							<li>
								<BsFillCheckCircleFill className="icon  icon-blue" />
								Exclusive premium widgets
							</li>
						</ul>
						<button className="button--blue">Buy now</button>
					</div>
				</div>
			</section>
			<section className="price-about-section">
				<div className="about-container container">
					<div className="about-block">
						<img src={aboutIcon1} alt="pirce about icon" />
						<h3>Easier Work Organization</h3>
						<p>
							Efficiently unleash cross-media information without
							cross-media value. Quickly timely deliverables for
							real-time schemas.{" "}
						</p>
					</div>
					<div className="about-block">
						<img src={aboutIcon2} alt="pirce about icon" />
						<h3>Fast Connection</h3>
						<p>
							Completely pursue scalable customer cross- media
							through potentialities. Holistically quickly
							installed portals.{" "}
						</p>
					</div>
					<div className="about-block">
						<img src={aboutIcon3} alt="pirce about icon" />
						<h3>Marketing Analytics</h3>
						<p>
							Phosfluorescently engage worldwide methodologies
							with web-enabled Interactively coordinate.
						</p>
					</div>
					<div className="about-block">
						<img src={aboutIcon4} alt="pirce about icon" />
						<h3>Workflow Builder</h3>
						<p>
							Collaboratively administrate turnkey service
							channels whereas virtual e-tailers. This is
							objectively scalable metrics whereas.
						</p>
					</div>
				</div>
			</section>
			<section className="price-product-section">
				<h2 className="subheading">Redefining Product Features</h2>
				<p className="subdescription">
					Keeping your eye on the ball while performing a deep dive on
					the start-up mentality to derive convergence on
					cross-platform integration.
				</p>
				<div className="product-content-container container">
					<div className="product-info-container">
						<a href="#">1% OF THE INDUSTRY</a>
						<h2>
							Demonstrate branding consequently think outside the
							box and beyond.
						</h2>
						<p>
							Velit purus egestas tellus phasellus. Mattis eget
							sed faucibus magna vulputate pellentesque a diam
							tincidunt. Aenean malesuada tellus tellus faucibus
							mauris quisque mauris in.
						</p>
						<button className="button--blue">
							Start now <AiOutlineArrowRight size={20} />
						</button>
					</div>
					<img
						className="product-img"
						src={productLaptop}
						alt="product image"
					/>
				</div>
			</section>
			<section className="price-customers">
				<h2 className="subheading">What Our Customers Say</h2>
				<div className="customer-container container">
					<CustomerBlock
						content="It fits our needs perfectly. It is definitely worth the investment. Your company is upstanding with and is behind its product 100%."
						name="Dave Jones"
						job="UI/UX"
						imgSrc={customer1}
					/>
					<CustomerBlock
						content="I could probably go into sales for you. The service was excellent. The service was excellent. Wow, Great job, I will be ordering again!"
						name="Morgan John"
						job="Manager"
						imgSrc={customer2}
					/>
					<CustomerBlock
						content="It fits our needs perfectly. It is definitely worth the investment. Your company is upstanding with and is behind its product 100%."
						name="Olivia Manson"
						job="CEO"
						imgSrc={customer3}
					/>
				</div>
			</section>
			<section className="price-signup-section">
				<div className="signup-container container">
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

export default Price;
