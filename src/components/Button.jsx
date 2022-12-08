import React from "react"

const Button = ({ text }) => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href="mailto:contact@scanrecs.com?body=Dear team at Scan Records,";
    }

    return (
        <button className="buttonLinkDiv" onClick={(e) => handleClick(e)} style={{
            fontSize: "20px"
        }}>
            {text}
        </button>
    );
}

export default Button;