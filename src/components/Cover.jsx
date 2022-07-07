import React from "react";
import "../styles/Cover.css"
import coverVideo from "../videos/coverVideo.mp4"
const Cover = () => {
    return(
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>Wilson Paredes</h1>
            <p>Student | junior developer</p>

        </div>
    )
}

export default Cover;