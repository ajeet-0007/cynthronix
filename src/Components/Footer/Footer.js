import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephoneOutbound} from 'react-icons/bs'
import './Footer.css';
import BrandExample from './BrandExample';


function Footer() {
  return (
    <>
      <div className="footer-main">
          <div className="footer-main-first-div">
              <div>
                  <p>
                      We are a perfect team of artisans for building an
                      innovative and amazing digital solutions.
                  </p>
              </div>
              <div>
                  <p>LOOKING FOR CAREER OPPORTUNITY?</p>
                  <ul className="contact">
                      <li>
                          <AiOutlineMail style={{ marginRight: "10px" }} />
                          cynthronix@gmail.com
                      </li>
                      <li>
                          <BsTelephoneOutbound
                              style={{ marginRight: "10px" }}
                          />
                          +91-7248148407
                      </li>
                  </ul>
              </div>
          </div>
          <div className="footer-main-second-div">
              <h3>Company</h3>
              <div className="footer-main-second-div-list">
                  <ul>
                      <li>About Us</li>
                      <li>Work</li>
                      <li>Carrers</li>
                      <li>Testimonials</li>
                      <li>Contact-Us</li>
                      <li>Privacy Policy</li>
                  </ul>
              </div>
          </div>
          <div className="footer-main-second-div">
              <h3> Our Services</h3>
              <div className="footer-main-second-div-list">
                  <ul>
                      <li>Mobile App Development</li>
                      <li>Cross Platform Mobile App Development</li>
                      <li>Web Development</li>
                      <li>Custome Software Development</li>
                      <li>MEAN/MERN Stack Development</li>
                      <li>Flutter App Development</li>
                  </ul>
              </div>
          </div>
          <div className="footer-main-second-div">
              <h3>Our Technology</h3>
              <div className="footer-main-second-div-list">
                  <ul>
                      <li>Mobile </li>
                      <li>Flutter</li>
                      <li>React.js</li>
                      <li>Node.js</li>
                      <li>Angular.js</li>
                      <li>Firebase</li>
                  </ul>
              </div>
          </div>
      </div>
     {/* <BrandExample></BrandExample> */}
      </>
  );
}

export default Footer