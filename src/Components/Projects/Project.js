import React from 'react'
import project from '../../assets/project.jpg';
import project_image from '../../assets/project-image-2.jpg';
import project_image_three from '../../assets/project-image-3.jpg'
import { useNavigate } from 'react-router-dom'
import './Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    BiLogoReact,
    BiLogoNodejs,
    BiLogoMongodb,
    BiLogoAws,
} from "react-icons/bi";


function Project() {

    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate('/services')
    }
  return (
      <div>
          <div className="main-content-project">
              <div className="main-content-one">
                  <div>
                      <h2>Rehabilitation Management Software</h2>
                  </div>
                  <div className="main-content-one-paragraph">
                      <p>
                          InSpired - One-stop solution for effective management
                          and uninterrupted control of Inspired Behavioral Inc.,
                          institutions.
                      </p>
                  </div>
                  <div>
                      <h3>Technology Stack</h3>
                  </div>
                  <div className="main-content-one-tech-stack-list">
                      <ul>
                          <li>
                              <BiLogoReact
                                  style={{ width: "40px", height: "40px" }}
                              />
                          </li>
                          <li>
                              <BiLogoNodejs
                                  style={{ width: "40px", height: "40px" }}
                              />
                          </li>
                          <li>
                              <BiLogoMongodb
                                  style={{ width: "40px", height: "40px" }}
                              />
                          </li>
                          <li>
                              <BiLogoAws
                                  style={{ width: "40px", height: "40px" }}
                              ></BiLogoAws>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <button
                          type="button"
                          class="btn btn-primary"
                          onClick={handleNavigate}
                          style={{
                              width: "100px",
                              height: "50px",
                              fontWeight: "bolder",
                              boxShadow: "5px 5px #7770e2",
                          }}
                      >
                          Explore
                      </button>
                  </div>
              </div>
              <div className="main-content-two" style={{}}>
                  <img src={project} alt="project-image"></img>
              </div>
          </div>
          <div className="main-content-project">
              <div className="main-content-two" style={{}}>
                  <img src={project_image} alt="project-image"></img>
              </div>
              <div className="main-content-one">
                  <div>
                      <h2>FilesDNA</h2>
                  </div>
                  <div className="main-content-one-paragraph">
                      <p>
                          FilesDNA is a paper-to-pixel system, which helps
                          organizations to smoothly transit from papers to
                          digital documents. Managing documents and getting
                          signatures got so easy with FilesDNA.
                      </p>
                  </div>
                  <div>
                      <h3>Technology Stack</h3>
                  </div>
                  <div className="main-content-one-tech-stack-list">
                      <ul>
                          <li>
                              <BiLogoReact
                                  style={{ width: "40px", height: "40px" }}
                              />
                          </li>
                          <li>
                              <BiLogoNodejs
                                  style={{ width: "40px", height: "40px" }}
                              />
                          </li>
                          <li>
                              <BiLogoMongodb
                                  style={{ width: "40px", height: "40px" }}
                              />
                          </li>
                          <li>
                              <BiLogoAws
                                  style={{ width: "40px", height: "40px" }}
                              ></BiLogoAws>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <button
                          type="button"
                          class="btn btn-primary"
                          onClick={handleNavigate}
                          style={{
                              width: "100px",
                              height: "50px",
                              fontWeight: "bolder",
                              boxShadow: "5px 5px #7770e2",
                          }}
                      >
                          Explore
                      </button>
                  </div>
              </div>
          </div>
          <div className="main-content-project">
              <div className="main-content-one">
                  <div>
                      <h2>Fan Rating Football Fantasy App</h2>
                  </div>
                  <div className="main-content-one-paragraph">
                      <p>
                          Fan Rating - The Fan's Home, The first App in the
                          world that rewards football fans for their opinions!
                          Fan Rating values ​​the opinion of all the Fans that
                          downloaded the App are participating in the annual
                          contest in which - by voting for their favorite
                          players at each match - they earn points for every
                          vote that comes close to the vote of the average
                          expressed by all of the fans (Fan Winner) and by our
                          experts ( Pro Winner), the algorithm then calculates
                          the winner of the Amazon Voucher worth € 15!
                      </p>
                  </div>
                  <div>
                      <h3>Technology Stack</h3>
                  </div>
                  <div className="main-content-one-tech-stack-list">
                      <ul>
                          <li>
                              <BiLogoReact
                                  style={{ width: "40px", height: "40px" }}
                              />
                          </li>
                          <li>
                              <BiLogoNodejs
                                  style={{ width: "40px", height: "40px" }}
                              />
                          </li>
                          <li>
                              <BiLogoMongodb
                                  style={{ width: "40px", height: "40px" }}
                              />
                          </li>
                          <li>
                              <BiLogoAws
                                  style={{ width: "40px", height: "40px" }}
                              ></BiLogoAws>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <button
                          type="button"
                          class="btn btn-primary"
                          onClick={handleNavigate}
                          style={{
                              width: "100px",
                              height: "50px",
                              fontWeight: "bolder",
                              boxShadow: "5px 5px #7770e2",
                          }}
                      >
                          Explore
                      </button>
                  </div>
              </div>
              <div className="main-content-two" style={{}}>
                  <img src={project_image_three} alt="project-image"></img>
              </div>
          </div>
      </div>
  );
}

export default Project