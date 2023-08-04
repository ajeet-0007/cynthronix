import React, { useState } from "react";
import { BiLogoFlutter } from "react-icons/bi";
import { AiFillAndroid } from "react-icons/ai";
import {
    BiLogoNodejs,
    BiLogoMongodb,
    BiLogoReact,
    BiLogoAngular,
} from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import MobileDevelopmentImage from "../../../assets/mobile-development.png";
import WebDevelopmentImage from '../../../assets/web_development.png'
import flutterDevelopmentImage from '../../../assets/flutter_development.png'
import saasDevelopmentImage from '../../../assets/saas_image.png'
import { useNavigate } from "react-router-dom";

import "./OurServices.css";
import Footer from "../../Footer/Footer";

function OurServices() {
    const [para, setPara] = useState(false);
    function handlePargraph() {
        setPara(!para);
    }
      const navigate = useNavigate();
      const handleNavigate = () => {
          navigate("/company");
      };
    return (
        <>
            <div className="services-main">
                <div className="services-main-one">
                    <div>
                        <h2>Our Custom Mobile App Development Services</h2>
                    </div>
                    <div>
                        <p>
                            There are so many ways to build mobile apps in the
                            market, and we happen to be experts in some of the
                            best technologies to craft custom, efficient, and
                            engaging mobile applications. We use high-end,
                            latest technologies for building attractive,
                            user-friendly, and widely accepted iOS and Android
                            mobile applications. We have served B2B, B2E, B2C
                            mobile app requirements of our clients from various
                            industries.{" "}
                            {para ? (
                                <span>
                                    Our experts carry out the process of
                                    creating applications, from the design to
                                    clickable prototypes, that will help
                                    understand the needs of the market and its
                                    potential users. Then, our development team
                                    build robust, secure, scalable mobile
                                    solutions, and connected web platforms.
                                </span>
                            ) : (
                                ""
                            )}
                        </p>
                        <button
                            type="button"
                            class="btn btn-light"
                            style={{
                                width: "150px",
                                height: "45px",
                                fontWeight: "bolder",
                                color: "blue",
                            }}
                            onClick={handlePargraph}
                        >
                            {para ? (
                                <span>Show Less</span>
                            ) : (
                                <span>Show More</span>
                            )}
                        </button>
                    </div>
                    <div
                        style={{
                            marginLeft: "-70px",
                            padding: "30px",
                            width: "100%",
                        }}
                    
                        className="listdiv"
                    >
                        <ul style={{ listStyleType: "none", display: "flex" , justifyContent:"space-evenly"}}>
                            <li >
                                <BiLogoFlutter
                                    style={{ width: "40px", height: "40px" }}
                                />
                            </li>
                            <li >
                                <AiFillAndroid
                                    style={{ width: "40px", height: "40px" }}
                                ></AiFillAndroid>
                            </li>
                            <li >
                                <BiLogoNodejs
                                    style={{ width: "40px", height: "40px" }}
                                ></BiLogoNodejs>
                            </li>
                            <li >
                                <SiMysql
                                    style={{ width: "40px", height: "40px" }}
                                ></SiMysql>
                            </li>
                            <li >
                                <BiLogoMongodb
                                    style={{ width: "40px", height: "40px" }}
                                />
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
                <div className="services-main-two">
                    <img src={MobileDevelopmentImage}></img>
                </div>
            </div>
            <div className="services-main">
                <div className="services-main-two">
                    <img src={WebDevelopmentImage}></img>
                </div>
                <div className="services-main-one">
                    <div>
                        <h2>Our Web App Development Services</h2>
                    </div>
                    <div>
                        <p>
                            We take pride in our ability to deliver the best and
                            cost-effective custom web design and development
                            solutions. We create unique websites, web
                            applications, admin panels, web tools, etc., for
                            global businesses, from start-ups to big business
                            giants. We turned their ideas into reality. We have
                            the capability to provide solutions like UI/UX
                            designs, Frontend, and Backend of Web Applications.{" "}
                            {para ? (
                                <span>
                                    ,Enterprise Software, CMS Sites, E-commerce
                                    platforms, etc. We build elegant, secure,
                                    and scalable web solutions that achieve
                                    actual business goals and leave a
                                    long-lasting impression on customers.
                                </span>
                            ) : (
                                ""
                            )}
                        </p>
                        <button
                            type="button"
                            class="btn btn-light"
                            style={{
                                width: "150px",
                                height: "45px",
                                fontWeight: "bolder",
                                color: "blue",
                            }}
                            onClick={handlePargraph}
                        >
                            {para ? (
                                <span>Show Less</span>
                            ) : (
                                <span>Show More</span>
                            )}
                        </button>
                    </div>
                    <div
                        style={{
                            marginLeft: "-70px",
                            padding: "30px",
                            width: "100%",
                        }}
                        className="listdiv"
                    >
                        <ul style={{ listStyleType: "none", display: "flex", justifyContent:"space-evenly" }}>
                            <li >
                                <BiLogoAngular
                                    style={{ width: "40px", height: "40px" }}
                                />
                            </li>
                            <li >
                                <BiLogoReact
                                    style={{ width: "40px", height: "40px" }}
                                ></BiLogoReact>
                            </li>
                            <li >
                                <BiLogoNodejs
                                    style={{ width: "40px", height: "40px" }}
                                ></BiLogoNodejs>
                            </li>
                            <li >
                                <SiMysql
                                    style={{ width: "40px", height: "40px" }}
                                ></SiMysql>
                            </li>
                            <li >
                                <BiLogoMongodb
                                    style={{ width: "40px", height: "40px" }}
                                />
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
            <div className="services-main">
                <div className="services-main-one">
                    <div>
                        <h2>Our Flutter Mobile App Development Services</h2>
                    </div>
                    <div>
                        <p>
                            Our company is the ideal choice to seek if you want
                            to start your project with an industry-leading
                            Flutter app development company. We work with our
                            clients from the start to the conclusion. With our
                            best-in-class flutter app development services, we
                            provide scalable, faster-to-develop apps and a
                            wonderful native experience..{" "}
                            {para ? (
                                <span>
                                    Our experts carry out the process of
                                    creating applications, from the design to
                                    clickable prototypes, that will help
                                    understand the needs of the market and its
                                    potential users. Then, our development team
                                    build robust, secure, scalable mobile
                                    solutions, and connected app platforms.
                                </span>
                            ) : (
                                ""
                            )}
                        </p>
                        <button
                            type="button"
                            class="btn btn-light"
                            style={{
                                width: "150px",
                                height: "45px",
                                fontWeight: "bolder",
                                color: "blue",
                            }}
                            onClick={handlePargraph}
                        >
                            {para ? (
                                <span>Show Less</span>
                            ) : (
                                <span>Show More</span>
                            )}
                        </button>
                    </div>
                    <div
                        style={{
                            marginLeft: "-70px",
                            padding: "30px",
                            width: "100%",
                        }}
                        className="listdiv"
                    >
                        <ul style={{ listStyleType: "none", display: "flex", justifyContent:"space-evenly" }}>
                            <li >
                                <BiLogoFlutter
                                    style={{ width: "40px", height: "40px" }}
                                />
                            </li>
                            <li >
                                <AiFillAndroid
                                    style={{ width: "40px", height: "40px" }}
                                ></AiFillAndroid>
                            </li>
                            <li >
                                <BiLogoNodejs
                                    style={{ width: "40px", height: "40px" }}
                                ></BiLogoNodejs>
                            </li>
                            <li >
                                <SiMysql
                                    style={{ width: "40px", height: "40px" }}
                                ></SiMysql>
                            </li>
                            <li >
                                <BiLogoMongodb
                                    style={{ width: "40px", height: "40px" }}
                                />
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
                <div className="services-main-two">
                    <img src={flutterDevelopmentImage}></img>
                </div>
            </div>
            <div className="services-main">
                <div className="services-main-two">
                    <img src={saasDevelopmentImage}></img>
                </div>
                <div className="services-main-one">
                    <div>
                        <h2>Our SaaS Development Services</h2>
                    </div>
                    <div>
                        <p>
                            We have transformed startups and their cloud
                            journeys by developing them highly scalable and
                            secure solutions that can operate at high speed and
                            efficiency. We have the ability to offer the best
                            and fitting SAAS Development solutions including
                            integrations and customizations as per the
                            business-specific requirements.{" "}
                            {para ? (
                                <span>
                                    We have offered and developed several
                                    cost-effective SaaS-based solutions in our
                                    journey of more than 5 years for businesses
                                    from various industrial domains and helped
                                    them transform their activities to whole
                                    another level..
                                </span>
                            ) : (
                                ""
                            )}
                        </p>
                        <button
                            type="button"
                            class="btn btn-light"
                            style={{
                                width: "150px",
                                height: "45px",
                                fontWeight: "bolder",
                                color: "blue",
                            }}
                            onClick={handlePargraph}
                        >
                            {para ? (
                                <span>Show Less</span>
                            ) : (
                                <span>Show More</span>
                            )}
                        </button>
                    </div>
                    <div
                        style={{
                            marginLeft: "-70px",
                            padding: "30px",
                            width: "100%",
                        }}
                        className="listdiv"
                    >
                        <ul style={{ listStyleType: "none", display: "flex", justifyContent:"space-evenly" }}>
                            <li >
                                <BiLogoAngular
                                    style={{ width: "40px", height: "40px" }}
                                />
                            </li>
                            <li >
                                <BiLogoReact
                                    style={{ width: "40px", height: "40px" }}
                                ></BiLogoReact>
                            </li>
                            <li >
                                <BiLogoNodejs
                                    style={{ width: "40px", height: "40px" }}
                                ></BiLogoNodejs>
                            </li>
                            <li >
                                <SiMysql
                                    style={{ width: "40px", height: "40px" }}
                                ></SiMysql>
                            </li>
                            <li >
                                <BiLogoMongodb
                                    style={{ width: "40px", height: "40px" }}
                                />
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
            <Footer></Footer>
        </>
    );
}

export default OurServices;
