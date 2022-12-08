import React from "react"

const TinyButton = ({ image, link }) => {
    return (
        <a href={link} className="tinyButton" target="_blank" rel="noreferrer">
            <img className="tinyImage" src={image} height="30px" width="30px" alt="small link to social media accounts of the label" />
        </a>  
    );
}

export default TinyButton;