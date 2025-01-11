import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
import videoSrc from '../../assets/contact.back3.mp4';

const Contact = () => {
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "be2672e1-07b6-4f03-9c16-f78cf707c4fc"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    } else {
      setResult(data.message);
    }
  };

  return (
    <div className="background-content" id='contactus'>
      {showPopup && (
        <div className="popup-message">
          Form Submitted Successfully!
        </div>
      )}
      <video autoPlay muted loop className="backgroundc-content-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="background-text1">
        <div className="contact container-fluid py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 mb-4">
              <div className="contact-us-content text-white">
                <h3>Send us a message</h3>
                <p>
                  Feel free to reach out through the contact form or find our contact
                  information below. Your feedback, questions, and suggestions are
                  important to us.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <img className="img-class" src={mail_icon} alt="mail icon" /> info@iotsolutions.lk
                  </li>
                  <li>
                    <img className="img-class" src={phone_icon} alt="phone icon" /> +(94) 777371118
                  </li>
                  <li>
                    <img className="img-class" src={location_icon} alt="location icon" /> 162, Rajagiriya Road, Rajagiriya
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-dark mb-3">
                <div className="card-header">Leave Your Message</div>
                <div className="card-body">
                  <form className='contact-form' onSubmit={onSubmit}>
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <label>Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter your name"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phonenumber"
                          placeholder="Enter your phone number"
                          required
                        />
                      </div>

                      <div className="col-md-12">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      <div className="col-md-12">
                        <label>Message</label>
                        <textarea
                          className="form-control"
                          name="message"
                          rows="6"
                          placeholder="Enter your message"
                          required
                        ></textarea>
                      </div>

                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-primary w-100">
                          Submit Message <img src={white_arrow} alt="arrow icon" />
                        </button>
                      </div>
                    </div>
                  </form>
                  <span className="form-result">{result}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
