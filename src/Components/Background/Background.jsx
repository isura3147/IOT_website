import React, { useState, useEffect } from 'react';
import dark_arrow from '../../assets/dark-arrow.png';
import Video from '../../assets/blackVideo.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';
import './background.css';
import { Link } from 'react-scroll';


const Background = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Industrial Automation", "Hardware Engineering", "IoT Software", "Robotics Applications", "SCADA Systems", ""];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [words.length]);

  return (
    <div className="video-background-holder" id='background1'>
      <div className="video-background-overlay"></div>
      <video className="video-fluid" playsInline autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="video-background-content container h-100">
        <div className="d-flex h-100 text-center align-items-center">
          <div className="w-100 text-white">
            <h1 className="display-4 background-text">
              Pioneering IoT to Reshape Global Interactions
            </h1>
            <p className="lead mb-0">
              We have developed top-notch IoT devices and assisted numerous organizations in achieving economic success.
            </p>
            <div className="animated-words">
              <span key={currentWordIndex}>{words[currentWordIndex]}</span>
            </div>
            <Link to='contactus' smooth={true} offset={-50} duration={500} type="button" class="btn btn-secondary ">Contact Us
            
              <img src={dark_arrow} alt="arrow" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
