/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import theme_patter from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_patter} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus optio tenetur dolorum error laudantium doloribus nam
              odit voluptate unde? Quaerat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              odit, voluptatem doloribus laudantium quae minima excepturi ut
              beatae voluptatibus optio?
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
                <p>Html & css</p>
                <hr style={{width:"50%"}} />
            </div>
            <div className="about-skill">
                <p>php & mysql</p>
                <hr style={{width:"70%"}} />
            </div>
            <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{width:"60%"}} />
            </div>
            <div className="about-skill">
                <p>MERN</p>
                <hr style={{width:"50%"}} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>25+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>4+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
