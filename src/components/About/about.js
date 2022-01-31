
import React from "react";
import "./style.scss"
import vid from "./b_roll.mp4";



const About = () => {
  return(
    <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About</title>
    <link rel="icon" type="image/png" href="favicon.png" />
    <link rel="stylesheet" href="style.css" />
    <video classname="video-background" src={vid} muted loop autoPlay={true}>
    </video>
    <div classname="video-overlay">
      <div classname="container">
        <div classname="input-container" id="input-container">
          <div className="style">
          <h1>About</h1>
          <br />
          <p>
            The Museum Association of New York is dedicated to providing you with
            a variety of museums that each fulfill different interests. <br />
            <br />
            Whether you’re interested in modern art, NYC transit, or even ice
            cream, the Museum Association of New York has got you covered.
          </p>
          <br />
          <h3>So what are you waiting for? Go to a museum today!</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
 );
};

export default About;