/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";
import profile_img from "../../../assets/profile_img.svg";
import linkedin_img from "../../../assets/linked_white.svg";
import git_img from "../../../assets/github_white.svg";
import insta from "../../../assets/insta_white.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Channaveer</span>, Full Stack Developer.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
        praesentium saepe earum rem dolor ex ut, hic eos voluptates quaerat!
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
      <div className="social_icons">
        <img className="icon" src={linkedin_img} alt="" />
        <img className="icon" src={git_img} alt="" />
        <img className="icon" src={insta} alt="" />
      </div>
    </div>
  );
};

export default Hero;
