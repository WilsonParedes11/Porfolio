import React from "react";
import "../styles/About.css"
const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Dejame contarte algo sobre mi</h3>
                <p>Soy un estudiante de ingeniería de software apasionado por la tecnología </p>
            </div>
            <div className="about-img">
                <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
                    alt="about" />
            </div>
        </div>

    );
};

export default About;