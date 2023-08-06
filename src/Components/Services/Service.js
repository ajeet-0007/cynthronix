import {React, useEffect} from 'react'
import './Service.css'
import OurServices from './OurServices/OurServices';
import FooterSocialMedia from '../Footer-Social-Media/FooterSocialMedia';

function Service() {
      useEffect(() => {
          window.scrollTo(0, 0);
      }, []);


  return (
    
      <>
          <div className="service-main">
              <div className="service-haading">
                  <h1>You Envision, We Deliver</h1>
              </div>
              <div className="service-content">
                  <p>
                      Cynthronix is an evolving family of experienced, dedicated,
                      determined, and skilled resources who strives to see you
                      and your product grow and achieve new heights.
                  </p>
              </div>
          </div>
          <OurServices></OurServices>
          <FooterSocialMedia></FooterSocialMedia>
      </>
  );
}

export default Service