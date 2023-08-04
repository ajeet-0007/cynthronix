import React from 'react'
import './AboutCards.css';

function AboutCards() {
  return (
      <>
        <div style={{alignContent:"center", textAlign:"center", paddingTop: "60px", fontFamily: "sans-serif", fontSize: "00px"}}>
            <h1 style={{fontSize: "80px"}}>Principles We Believe In</h1>
        </div>
          <div className="about-cards-main">
              <div class="card" id="card" >
                  <div class="card-body">
                      <h4
                          class="card-title"
                          style={{ padding: "15px", fontWeight: "bold" }}
                      >
                          Passion to take up any challenge
                      </h4>

                      <p class="card-text" style={{ padding: "25px" }}>
                          We are a team of very curious and challenge-loving
                          resources. We take "Everything is possible" very
                          seriously and we never rest until we come up with the
                          required solutions. Our job is to satisfy your complex
                          requirements with our services and we never back down
                          from our job.
                      </p>
                  </div>
              </div>
              <div class="card" style={{ width: "25% " }}>
                  <div class="card-body">
                      <h4
                          class="card-title"
                          style={{ padding: "15px", fontWeight: "bold" }}
                      >
                          Transparent Communication and Planning
                      </h4>

                      <p class="card-text" style={{ padding: "25px" }}>
                          Lack in communication in the beginning brings probable
                          inaccuracy midstream which is something we avoid at
                          any cost. So, sometime over communication can be
                          boring, but trust us, it's necessary for streamlined,
                          secure, and errorless development.
                      </p>
                  </div>
              </div>
              <div class="card" style={{ width: "25%" }}>
                  <div class="card-body">
                      <h4
                          class="card-title"
                          style={{ padding: "15px", fontWeight: "bold" }}
                      >
                          Undivided Attention and Care for every Projects
                      </h4>

                      <p class="card-text" style={{ padding: "25px" }}>
                          We don't judge our work based on industry type, client
                          size, and amount quoted. Our teams with dedicated team
                          leaders are assigned with projects based on the skill
                          requirements and availability of the resources using
                          best-in-class project management tools
                      </p>
                  </div>
              </div>
          </div>
      </>
  );
}

export default AboutCards