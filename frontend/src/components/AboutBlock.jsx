import React from "react";
import { Link } from "react-router-dom";

//icon
import { AiOutlineArrowRight } from "react-icons/ai";

const AboutBlock = (props) => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "instant"
        });
    }

    return (
        <div>
            <img src={props.icon} alt="abouticon" />
            <h3>{props.h3}</h3>
            <p>{props.p}</p>
            <Link to="/about" onClick={handleScrollToTop}>
                Learn more <AiOutlineArrowRight />
            </Link>
        </div>
    );
};

export default AboutBlock;
