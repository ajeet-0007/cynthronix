import React from "react";
import './AboutUs.css'
import dotImage from '../../../assets/dotdtory.png'

function AboutUs() {
    return (
        <div className="about-us-main">
            <div className="about-us-main-one">
                
                <div style={{ padding: "20px" }}>
                    <h1 style={{ fontSize: "50px" }}>Who We Are</h1>
                </div>
                <div>
                    <p>
                        In December 2015, We emerged as a fully grown IT
                        services firm under the encouraging leadership of our
                        founders who paved the Way to Excellence and Progress
                        for their team members to follow. We think of ourselves
                        as Creators and we create every products with utmost
                        care, passion, and we see to it that they perform well.
                        We are very passionate and curious to adapt to modern
                        technologies that can make your products more enhanced.
                    </p>
                </div>
            </div>
            <div className="about-us-main-two">
                <div style={{ padding: "20px" }}>
                    <h1 style={{ fontSize: "50px" }}>What We Do</h1>
                </div>
                <div>
                    <p>
                        Our designers and developers follow the streamlined
                        development process to construct the bridge that
                        literally connects your idea of building a digital
                        solution to a working, reliable, user-friendly, and
                        secure model for your business All we care about is to
                        successfully deliver what we promised and within the
                        time we promised. Just like that, we have served more
                        than 250 happy and satisfied clients, and we have worked
                        on more than 500 projects with the rate of retention
                        growing every year.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
