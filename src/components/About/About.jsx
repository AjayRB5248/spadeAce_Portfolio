import React, { useRef, useState } from "react";
import "./About.css";
import images from "../../constants/images";
import { about_stats } from "../../constants/data";
import video from "../../assets/videos/video.mp4";
import { FaPlay } from "react-icons/fa";

const About = () => {
  return (
    <div className="about section-p bg-grey" id='projects'>
        <div className="section-title">
          <h3 className="text-brown">
          Projects and  <span className="text-dark">Ventures</span>
          </h3>
          <p className="text">
          SpadeAce proudly operates prominent casinos in Nepal,
          </p>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="about-grid grid">
              <img
                src={images.casion2}
                alt=""
                className="about-img mx-auto"
              />
              <div className="section-title">
                <h3 className="text-brown">
                Casino  <span className="text-dark">Paradise</span>
                </h3>
                <p className="text mx-auto">
                In operation for a decade,
                </p>
                <button type = "button"  className='btn-item bg-brown fw-4 ls-2'><a href="https://casinoparadisenepal.com/" target="_blank">Visit Site</a></button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="about-grid grid">
              <div className="section-title">
                <h3 className="text-brown">
                Casino <span className="text-dark">star</span>
                </h3>
                <p className="text mx-auto">
                Stand as some of the largest and most opulent casinos in the country.
                </p>
                <button type = "button"  className='btn-item bg-brown fw-4 ls-2'><a href="https://www.casinopridenepal.com/" target="_blank">Visit Site</a></button>
              </div>
              <img
                src={images.casion1}
                alt=""
                className="about-img mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="about-grid grid">
              <img
                src={images.gamblinggalaxy}
                alt=""
                className="about-img mx-auto"
              />
              <div className="section-title">
                <h3 className="text-brown">
                Gambling  <span className="text-dark">Galaxy</span>
                </h3>
                <p className="text mx-auto">
                One of the biggest and most luxurious casinos in Nepal, is located in Bhairahawa,Nepal.
                </p>
                <button type = "button"  className='btn-item bg-brown fw-4 ls-2'><a href="https://gamblinggalaxynepal.com/" target="_blank">Visit Site</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;
