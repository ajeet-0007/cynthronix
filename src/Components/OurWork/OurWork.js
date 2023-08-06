import {React, useEffect} from 'react'
import './OurWork.css'
import Project from '../Projects/Project';
import Footer from '../Footer/Footer';
import FooterSocialMedia from '../Footer-Social-Media/FooterSocialMedia';
import ContactForm from '../Contact-Form/ContactForm';


function OurWork() {
      useEffect(() => {
          window.scrollTo(0, 0);
      }, []);


  return (
      <>
          <div className="main">
              <div className="heading">
                  <h1>Our Work</h1>
              </div>
              <div className="content">
                  <p>
                      Read about some of our best success stories where we
                      transformed our clients' ideas into a scalable and
                      user-friendly product by beating all the challenges with
                      our exceptional efforts
                  </p>
              </div>
          </div>
          <Project></Project>
          <ContactForm></ContactForm>
          <Footer></Footer>
          <FooterSocialMedia></FooterSocialMedia>
      </>
  );
}

export default OurWork