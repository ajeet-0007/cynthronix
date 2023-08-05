import {React, useState, useEffect} from 'react'
import './Navbar.css'
import { NavLink, Navigate } from 'react-router-dom';
import cynthronixLogo from '../../assets/cynthronix_logo.png'
import { Button } from 'bootstrap';
import Menu from './Menu';
import BrandExample from '../Footer/BrandExample'

function Navbar() {
    const [open ,setOpen] = useState(false);
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        useEffect(() => {
            // Add event listener on component mount
            window.addEventListener("resize", handleResize);

            // Remove event listener on component unmount
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }, [windowWidth]);
        // console.log(open)

        
  return (
      <>
          {/* <nav className={(!open && windowWidth<1300) ? "navbar-height" : "navbar"}>
              <div className="img">
                  <img src={cynthronixLogo} alt="logo"></img>
                  {windowWidth < 1300 ? (
                      <button onClick={() => setOpen(!open)}>Open</button>
                  ) : (
                      ""
                  )}
              </div>

              {windowWidth < 1300 ? (
                  open === true ? (
                      <Menu></Menu>
                  ) : (
                      ""
                  )
              ) : (
                  <Menu></Menu>
              )}
          </nav> */}
          <BrandExample></BrandExample>
      </>
  );
}

export default Navbar