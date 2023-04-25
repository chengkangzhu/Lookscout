import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const FeatureBlock = (props) => {
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
				<p>
					{props.p}
				</p>
				<a href="#">
					Learn more <AiOutlineArrowRight />
				</a>
			</td>
		</tr>
	);
};

export default FeatureBlock;
