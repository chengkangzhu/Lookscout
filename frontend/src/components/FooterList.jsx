import React from "react";

const FooterList = (props) => {
	return (
		<ul>
			<li className="li-head">{props.head}</li>
			<li>
				<a href="#">{props.one}</a>
			</li>
			<li>
				<a href="#">{props.two}</a>
			</li>
			<li>
				<a href="#">{props.three}</a>
			</li>
			<li>
				<a href="#">{props.four}</a>
			</li>
		</ul>
	);
};

export default FooterList;
