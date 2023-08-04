import React from 'react'
import "./OurVision.css"
function OurVision() {
  return (
      <div className="ourvision-main">
          <div className="ourvision-main-one">
              <h1 style={{ textAlign: "center" }}>
                  We Give our Efforts To reach to a place from where we can see
                  our mission and vision come true
              </h1>
          </div>
          <div className="ourvision-main-two">
              <div style={{ padding: "30px" }}>
                  <h1 style={{ textAlign: "center",  }}>Our Vision</h1>
                  <p style={{ textAlign: "center", fontFamily: "sans-serif", fontSize: "20px" }}>
                      We believe to reach at a place where our services will be
                      highly regarded by businesses from various industrial
                      domains for building their innovative busines solutions
                      with our cutting-edge technological expertise, interactive
                      designs, uncompromised quality.
                  </p>
              </div>
              <div style={{ padding: "30px" }}>
                  <h1 style={{ textAlign: "center" }}>Our Mission</h1>
                  <p style={{ textAlign: "center" , fontFamily: "sans-serif", fontSize: "20px"}}>
                      We want to help businesses ranging from startups to
                      enterprises, who reach out to us with their requirements,
                      in achieving great lengths, expanding their reach,
                      upscaling their products, and generate a large user-base
                      with our outstanding and cost-effective services.
                  </p>
              </div>
          </div>
      </div>
  );
}

export default OurVision