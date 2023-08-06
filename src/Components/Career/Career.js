import React from "react";
import './Career.css';
import Opening from "./Opening/Opening";
import Footer from '../Footer/Footer'
import AboutCards from '../Company/AboutCards/AboutCards'
import FooterSocialMedia from "../Footer-Social-Media/FooterSocialMedia";
import { useEffect } from "react";

function Career() {
      useEffect(() => {
          window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div className="carrer-main">
                <div>
                    <h1>Join our team</h1>
                </div>
                <div className="carrer-main-quote">
                    <p>
                        Find your right place amidst us and be a part of an
                        ever-growing family
                    </p>
                </div>
            </div>
            <Opening></Opening>
            <AboutCards></AboutCards>
            <Footer></Footer>
            <FooterSocialMedia></FooterSocialMedia>
        </>
    );
}

export default Career;
