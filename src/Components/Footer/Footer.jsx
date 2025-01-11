import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Social media section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Text and icons wrapped in a single div for alignment */}
        <div className="d-flex align-items-center">
          <span className="me-3">Get connected with us on social networks:</span>
          <a href="https://www.facebook.com/profile.php?id=61550879721798" className="me-3 text-reset">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.linkedin.com/company/av-iot/" className="text-reset">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </section>

      {/* Main content section */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">IOT SOLUTIONS PVT LTD.</h6>
              <p>
                We are pioneers in utilizing the potential of IoT technology to transform how organizations and people engage with the real world.
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>162, Rajagiriya Road, Rajagiriya</p>
              <p>info@iotsolutions.lk</p>
              <p>+94777371118</p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright section */}
      <div className="text-center p-4" style={{ backgroundColor: 'white' }}>
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> IOT Solutions</a>
      </div>
    </footer>
  );
};

export default Footer;
