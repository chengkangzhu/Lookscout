import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const FeatureBlock = (props) => {
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "instant",
		});
	};
	return (
		<tr>
			<td>
				<img
					className="feature-icon"
					src={props.icon}
					alt="product feature icon"
				/>
			</td>

			<td>
				<h3>{props.h3}</h3>
				<p>{props.p}</p>
				<Link to="/pricing" onClick={handleScrollToTop}>
					Learn more <AiOutlineArrowRight />
				</Link>
			</td>
		</tr>
	);
};

export default FeatureBlock;
