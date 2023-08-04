import React from "react";
import {BiCopyright} from 'react-icons/bi'
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import "./FooterSocialMedia.css";

function FooterSocialMedia() {
    return (
        <div className="social-media-main">
            <div className="copyright-div">
                <div>
                    <BiCopyright></BiCopyright>
                </div>
                <div>2015 - 2023 Cynthronix Web. All Rights Reserved.</div>
            </div>
            <div className="social-media-links">
                <div>
                    <a
                        href="https://www.facebook.com/profile.php?id=100093245913986"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsFacebook></BsFacebook>
                    </a>
                </div>
                {/* <div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <BsTwitter></BsTwitter>
                    </a>
                </div> */}
                <div>
                    <a
                        href="https://www.instagram.com/cynthronix/?igshid=NGExMmI2YTkyZg%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsInstagram></BsInstagram>
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.linkedin.com/in/cynthronix-softwares-371897284/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsLinkedin></BsLinkedin>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FooterSocialMedia;
