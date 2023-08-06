import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephoneOutbound} from 'react-icons/bs'
import './Footer.css';
import BrandExample from './BrandExample';
import  {useNavigate} from 'react-router-dom';


function Footer() {

    const navigate = useNavigate();

    const aboutUsHandler = ()=>{
        navigate('/')
    }

    const workHandler = () =>{
        navigate('/')
    }

    const carrerHandler = () =>{
        navigate('/career')
    }

    const companyHandler = () =>{
        navigate('/company')
    }

    const contactUsHandler = ()=>{
        navigate('/contact-us')
    }

        const redirectToGmail = () => {
            const email = "cynthronix@gmail.com"; // Replace this with the desired email
            const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(
                email
            )}`;
            window.open(gmailUrl, "_blank"); // Replace this URL with the Gmail URL
        };


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
                          <li onClick={redirectToGmail}>
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
                          <li onClick={aboutUsHandler}>About Us</li>
                          <li onClick={workHandler}>Work</li>
                          <li onClick={carrerHandler}>Careers</li>
                          <li onClick={companyHandler}>Company</li>
                          <li onClick={contactUsHandler}>Contact-Us</li>
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