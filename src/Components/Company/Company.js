import React, { useEffect } from "react";
import "./Company.css";
import companyImage from "../../assets/company_image.png"
import AboutUs from "./AboutUs/AboutUs";
import AboutCards from "./AboutCards/AboutCards";
import OurVision from "./OurVision/OurVision";
import Footer from "../Footer/Footer";
import FooterSocialMedia from "../Footer-Social-Media/FooterSocialMedia";

function Company() {

     useEffect(()=>{
        window.scrollTo(0,0);
     }, [])

    return (
        <>
            <div className="company-main">
                <div className="company-main-one">
                    <div>
                        <h1 style={{ fontSize: "50px" }}>
                            Come to Us When you think about Building your
                            Digital Solutions
                        </h1>
                    </div>
                    <div style={{ width: "90%", padding: "10px" }}>
                        <p style={{}}>
                            Our technically savvy team work in symmetry with our
                            business-generating and marketing team to build you
                            a reliable, market-compatible, user-friendly, and
                            long-lasting solutions. We are here to serve at your
                            pleasure with our best and cost-effective services
                        </p>
                    </div>
                </div>
                <div className="company-main-two">
                    <img src={companyImage} alt="company"></img>
                </div>
            </div>
            <AboutUs></AboutUs>
            <AboutCards></AboutCards>
            <OurVision></OurVision>
            <Footer></Footer>
            <FooterSocialMedia></FooterSocialMedia>
        </>
    );
}

export default Company;
